
#![no_std]
use gmeta::Metadata;
use hashbrown::HashMap;
use io::*;
use gstd::{async_main, errors::Result as GstdResult, msg, prelude::*, ActorId, MessageId};



#[cfg(feature = "binary-vendor")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));



#[derive(Debug, Clone, Default)]
struct LiquidStake {
    owner: ActorId,
    staking_token_address: ActorId,
    varatoken_total_staked: u128,
    total_time_protocol: u64,
    gvaratokens_reward_total: u128,
    distribution_time: u64,
    users: HashMap<ActorId, u128>,
}


impl LiquidStake {

    async fn gvara_tokens_destructor( &mut self, amount_tokens: u128){

       
        let currentstate = liquidstake_state_mut();
        let address_ft = addresft_state_mut(); 
        let payload = FTAction::Burn(amount_tokens);     
        let _ = msg::send(address_ft.ft_program_id, payload, 0);
        currentstate.users.entry(msg::source()).or_insert(amount_tokens);  

    }

    async fn gvara_tokens_generator(&mut self, amount_tokens: u128){

        let currentstate = liquidstake_state_mut();
        let address_ft = addresft_state_mut();           
        let payload = FTAction::Mint(amount_tokens);     
        let _ = msg::send(address_ft.ft_program_id, payload, 0);
        currentstate.users.entry(msg::source()).or_insert(amount_tokens);   

    }

  
   
}


static mut LIQUIDSTAKE: Option<LiquidStake> = None;

static mut STATE:Option<HashMap<ActorId, u128>> = None;

static mut ADDRESSFT:Option<InitFT> = None;


fn liquidstake_state_mut() -> &'static mut LiquidStake  {

    unsafe { LIQUIDSTAKE.get_or_insert(Default::default()) }


}


fn addresft_state_mut() -> &'static mut InitFT {


    let addressft = unsafe { ADDRESSFT.as_mut()};

    unsafe { addressft.unwrap_unchecked() }


}


#[no_mangle]
extern "C" fn init () {

    let config: InitFT = msg::load().expect("Unable to decode InitFT");

    let liquid_stake = LiquidStake {
        ..Default::default()
    };

    if config.ft_program_id.is_zero() {
        panic!("FT program address can't be 0");
    }

    let initft = InitFT {
        ft_program_id: config.ft_program_id
    };

    unsafe {
        ADDRESSFT = Some(initft);
    }

    unsafe { LIQUIDSTAKE = Some(liquid_stake) };

   unsafe { STATE = Some(HashMap::new())}

}

#[async_main]
async fn main(){

    let action:  LiquidStakeAction = msg::load().expect("Could not load Action");

    let liquid_stake = unsafe {LIQUIDSTAKE.get_or_insert(LiquidStake::default()) };

    match action {
        LiquidStakeAction::Stake(amount) =>  {
         

                let _result = liquid_stake.gvara_tokens_generator(amount).await;
               
 
            },
        LiquidStakeAction::Withdraw(amount) => {

                
                let _result = liquid_stake.gvara_tokens_destructor(amount).await;
                

             
            }
           
            };

}

    

    #[no_mangle]
    extern "C" fn state() {
    
        reply(common_state())
        .expect("Failed to encode or reply with `<AppMetadata as Metadata>::State` from `state()`");
    }


#[derive(Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct InitFT {
   
    pub ft_program_id: ActorId,
}



#[derive(Debug, Default, Encode, Decode, TypeInfo, Clone, PartialEq)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct User {
    pub balance: u128,
    pub reward_allowed: u128,
    pub reward_debt: u128,
    pub distributed: u128,
}

fn common_state() -> <ContractMetadata as Metadata>::State {
    let state = liquidstake_state_mut();

    let LiquidStake {
        owner,
        staking_token_address,
        varatoken_total_staked,
        total_time_protocol,
        gvaratokens_reward_total,
        distribution_time,
        users,
    } = state.clone();

    let users = users.iter().map(|(k, v)| (*k, v.clone())).collect();

    IoLiquidStake {
    owner,
    staking_token_address,
    varatoken_total_staked,
    total_time_protocol,
    gvaratokens_reward_total,
    distribution_time,
    users,
    }
}

fn reply(payload: impl Encode) -> GstdResult<MessageId> {
    msg::reply(payload, 0)
}


