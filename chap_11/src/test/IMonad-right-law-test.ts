import { Identity } from "../classes/Identity";

const m = Identity.of(1)

// m.chain(v => Identity.of(v)) === m.chain(Identity.of)
console.log(m.chain(Identity.of).equals(m))