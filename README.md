# NFT-Auction

This repo provides a PoC of a CKB-based NFT marketplace and auction platform.

This primarily provides an interactive sketch of the components and pages, although the integration with Lumos and the corresponding contracts are currently WIP.

Ultimately, the architecture for this project takes advantage of novel ownership models possible through combining OpenTX on CKB with the ability for lock scripts to enforce multiple possible outcomes in a transaction that cannot be enforced by signatures alone due to the non-deterministic nature of the outcome during signing-time (participants & judges will know what this means from our discussion in discord).

As we continue to develop this project post-hackathon, we will be exploring the following:

1. Fractional ownership models of NFTs
2. Royalties
3. Governance models
4. Token economic models
5. NFT Accounts

 Since this is a platform that facilitates economic interactions, there is real possibility to capture a portion of the value exchanged on the platform. Typical platforms use usage & fee based models to do this, but we are exploring how we can move the business model beyond a "platform-based" business model and into a fully fledged ecosystem. The application itself may be one of many future applications using NFTs on CKB. What's more important than a single platform and its network effects are the effects on the NFT ecoystem at large, within which many platforms are situated. By using the right token economic design, we can begin to build an NFT ecosystem around CKB, of which this platform (once completed) will be one component and the value of the underlying token(s) and governance processes will exist outside of one specific app or another.



 