/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers(
    $user_id: Int
    $name: String
    $passcode: String
    $contacts: AWSJSON
    $avatar: String
  ) {
    onCreateUsers(
      user_id: $user_id
      name: $name
      passcode: $passcode
      contacts: $contacts
      avatar: $avatar
    ) {
      user_id
      name
      passcode
      contacts
      avatar
      last_seen
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers(
    $user_id: Int
    $name: String
    $passcode: String
    $contacts: AWSJSON
    $avatar: String
  ) {
    onUpdateUsers(
      user_id: $user_id
      name: $name
      passcode: $passcode
      contacts: $contacts
      avatar: $avatar
    ) {
      user_id
      name
      passcode
      contacts
      avatar
      last_seen
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers(
    $user_id: Int
    $name: String
    $passcode: String
    $contacts: AWSJSON
    $avatar: String
  ) {
    onDeleteUsers(
      user_id: $user_id
      name: $name
      passcode: $passcode
      contacts: $contacts
      avatar: $avatar
    ) {
      user_id
      name
      passcode
      contacts
      avatar
      last_seen
    }
  }
`;
export const onCreateMessages = /* GraphQL */ `
  subscription OnCreateMessages(
    $message_id: Int
    $sent_by: Int
    $channel: String
    $type: String
    $message: String
  ) {
    onCreateMessages(
      message_id: $message_id
      sent_by: $sent_by
      channel: $channel
      type: $type
      message: $message
    ) {
      message_id
      sent_by
      channel
      type
      message
      file_url
      time
    }
  }
`;
export const onUpdateMessages = /* GraphQL */ `
  subscription OnUpdateMessages(
    $message_id: Int
    $sent_by: Int
    $channel: String
    $type: String
    $message: String
  ) {
    onUpdateMessages(
      message_id: $message_id
      sent_by: $sent_by
      channel: $channel
      type: $type
      message: $message
    ) {
      message_id
      sent_by
      channel
      type
      message
      file_url
      time
    }
  }
`;
export const onDeleteMessages = /* GraphQL */ `
  subscription OnDeleteMessages(
    $message_id: Int
    $sent_by: Int
    $channel: String
    $type: String
    $message: String
  ) {
    onDeleteMessages(
      message_id: $message_id
      sent_by: $sent_by
      channel: $channel
      type: $type
      message: $message
    ) {
      message_id
      sent_by
      channel
      type
      message
      file_url
      time
    }
  }
`;
