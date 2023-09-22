use gclient::GearApi;
use gmeta::Metadata;
use gsdk;
use gsdk::metadata::runtime_types::gear_core::ids::ProgramId;
use gstd::{errors::Result, msg, prelude::*, ActorId};
use hashbrown::HashMap;
use io::*;

struct LStaking {
    owner: ActorId,
    total_staked: u128,
    stakers: HashMap<ActorId, Staker>,
}

static mut LSTAKING: Option<LStaking> = None;

#[no_mangle]
extern "C" fn init() {}

async fn get_validator() -> ActorId {
    let validators = gsdk::Api::new(None).await?.validators().await?;
    let random = 0; // gstd::exec::random();
                    // TODO: validate address
    unsafe { validators.get_unchecked(random) }.into();
}

/// from: origin address
/// suri: Substrate URI, with format URI:password
/// to: destination address
/// amount: value of VARA token to transfer
async fn transfer(from: gclient::WSAddress, suri: impl AsRef<str>, to: ProgramId, amount: u128) {
    gclient::GearApi::init_with(from, suri)
        .await
        .expect("Error at init client")
        .transfer(to, amount)
        .await
        .expect("Error at transfer");
}

#[gstd::async_main]
async fn main() {
    let staking = unsafe { LSTAKING.get_or_insert(LStaking::default()) };
    // We load the input message
    let action = msg::load::<Action>()?;
    let surce = msg::source();

    let result = match action {
        Action::Stake(amount) => {
            // modify LSTAKING with the new transaction
            // transfer the `amount` of VARA to a random validator
            let validator = get_validator().await;

            // mint `amount` of gVARA for the caller
        }
        Action::Withdraw(amount) => {}
    };

    // We receive an action from the user and update the state. Example:
    if let Action::ExampleAction = payload {
        let currentstate = state_mut();

        // Update your state Example: (ActorId,u128)
        currentstate.insert(msg::source(), 10);

        // Generate response message
        msg::reply(Event::ExampleEvent, 0)?;
    }

    Ok(())
}

#[no_mangle]
extern "C" fn state() {
    // We create a state variable.
    let state: <ContractMetadata as Metadata>::State =
        state_mut().iter().map(|(k, v)| (*k, *v)).collect();

    // Generate response message
    msg::reply(state, 0).expect("failed to encode or reply from `state()`");
}
