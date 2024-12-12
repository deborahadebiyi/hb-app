import { IAuditLog } from "@/models/AuditLog";

export default function createAuditLogs(detailsObject: Record<string, any>) {
  let auditLog;
  const properties = Object.keys(detailsObject)
    .filter((key) => detailsObject[key] === true)
    .sort()
    .join("-");
  switch (properties) {
    case "email-password-username":
      auditLog = {
        accountId: "",
        eventName: "AccountCreated",
        timestamp: new Date(Date.now()),
      };
      return auditLog;
    case "username":
      auditLog = {
        accountId: "",
        eventName: "AccountUsernameChanged",
        timestamp: new Date(Date.now()),
      };
      return auditLog;
    case "telephoneNumber":
      auditLog = {
        accountId: "",
        eventName: "AccountTelephoneNumberUpdated",
        timestamp: new Date(Date.now()),
      };
    case "emailAddress":
      auditLog = {
        accountId: "",
        eventName: "AccountEmailAddressUpdated",
        timestamp: new Date(Date.now()),
      };
    case "password":
      auditLog = {
        accountId: "",
        eventName: "AccountPasswordChanged",
        timestamp: new Date(Date.now()),
      };
  }
}

/**
 * The following eventNames are covered by this function as these properties can be found in the body
 * AccountCreated 
 * AccountEmailAddressUpdated
 * AccountTelephoneNumberUpdated
 * AccountUsernameChanged
 * AccountPasswordChanged
 * 
 * The remaining will have to be manually created in their various endpoints
 * 

AccountVerified /verify-account
AccountSubscriptionStarted /start-subscription
AccountSubscriptionEnded /end-subscription
AccountDeleted /delete-account
AccountForgottenPassword /forgotten-password
AccountLogin  /login
AccountLogout /logout
 */
