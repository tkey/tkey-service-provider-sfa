import { type ServiceProviderArgs } from "@tkey/common-types";
import { type Web3AuthOptions } from "@web3auth/single-factor-auth";

export interface SfaServiceProviderArgs extends ServiceProviderArgs {
  web3AuthOptions: Web3AuthOptions;
}
