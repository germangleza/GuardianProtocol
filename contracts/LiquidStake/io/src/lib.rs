
#![no_std]
use gstd::{ prelude::*, ActorId };
use gmeta::{In, InOut, Metadata};



pub type TransactionId = u64;



#[derive(Encode, Decode, TypeInfo, Hash, PartialEq, PartialOrd, Eq, Ord, Clone, Copy, Debug)]
pub enum LiquidStakeAction {
    Stake(u128),
    Withdraw(u128),
}


#[derive(Debug, Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub enum FTAction {
    Mint(u128),
    Burn(u128),
    Transfer {
        from: ActorId,
        to: ActorId,
        amount: u128,
    },
    Approve {
        to: ActorId,
        amount: u128,
    },
    TotalSupply,
    BalanceOf(ActorId),
}

#[derive(Debug, Encode, Decode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub enum LiquidStakeEvent {
    SuccessfulStake,
    SuccessfulUnstake,
}

#[derive(Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct InitFT {
   
    pub ft_program_id: ActorId,
}

#[derive(Debug, Clone, Encode, Decode, TypeInfo)]
pub enum Error {
    ZeroAmount,
    ZeroReward,
    ZeroTime,
    TransferTokens,
    PreviousTxMustBeCompleted,
    InsufficentBalance,
    NotOwner,
    StakerNotFound,
    ContractError(String),
}

#[derive(Debug, Clone, Encode, Decode, TypeInfo)]
pub struct Transaction<T> {
    pub id: TransactionId,
    pub action: T,
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


#[derive(Default, Encode, Decode,TypeInfo)]
pub struct LiquidStake {
    owner: ActorId,
    staking_token_address: ActorId,
    varatoken_total_staked: u128,
    total_time_protocol: u64,
    gvaratokens_reward_total: u128,
    distribution_time: u64,
    users: Vec<(ActorId, u128)>,
}

#[derive(Debug, Clone, Default, Encode, Decode, TypeInfo)]
pub struct IoLiquidStake {
    pub owner: ActorId,
    pub staking_token_address: ActorId,
    pub varatoken_total_staked: u128,
    pub total_time_protocol: u64,
    pub gvaratokens_reward_total: u128,
    pub distribution_time: u64,
    pub users: Vec<(ActorId, u128)>,
}


pub struct ContractMetadata;


impl Metadata for ContractMetadata{
    type Init = In<InitFT>;
     type Handle = InOut<LiquidStakeAction,LiquidStakeEvent>;
     type Others = ();
     type Reply=();
     type Signal = ();
     type State = IoLiquidStake;

}