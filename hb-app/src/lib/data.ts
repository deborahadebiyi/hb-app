import Policy from "@/models/reference-models/Policy";

// export async function createPolicy() {
//   let lateFee: number | null;
//   let cancellationFee: number | null;
//   let outOfHoursFee;
// }

export async function fetchPolicy(accountId: string) {
  try {
    const policyValues = await Policy.findOne({ accountId });
    return policyValues;

    // should access policyValues.defaultPolicies, the strings should correspond to
    // predefined default policies. Traverse the array and load the corresponding policies
    // and their corresponding values
    //e.g defaultPolicies: ['late'] would require defaultPolicies.lateFee and the default text.
  } catch (error) {
    console.error("Error fetching policies:", error);
  }
}
