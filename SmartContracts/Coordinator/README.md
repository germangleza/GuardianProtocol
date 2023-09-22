# VARA hackaton CryptoMX: Guardian Protocol

```mermaid
sequenceDiagram
    autonumber
    User ->> Protocol: stakes VARA
    Protocol -->> User: mints gVARA
    Protocol ->> Validators: transfers VARA

    loop Rewards
        Validators -->> Protocol: generates reward
        Protocol -->> User: transfers VARA (90% of reward)
    end

    User ->> Protocol: action Withdraw
    Protocol ->> User: burns gVARA
    Protocol ->> User: transfers VARA
```

## TODO

- [ ] handle Stake
- [ ] trigger event Mint
- [ ] transfer vara to validators
- [ ] handle mint
