
#![no_std]

use io::*;
use gmeta::{ Metadata, metawasm};
use gstd::{ ActorId, prelude::*};


#[cfg(feature = "binary-vendor")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));

#[metawasm]
pub mod metafns {
    pub type State = LiquidStake;


    pub fn get_state(state: State) -> LiquidStake {
        state
    }



}