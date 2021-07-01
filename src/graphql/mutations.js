/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers($input: CreateUsersInput!) {
    createUsers(input: $input) {
      user_id
      name
      passcode
      contacts
      avatar
      last_seen
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers($input: UpdateUsersInput!) {
    updateUsers(input: $input) {
      user_id
      name
      passcode
      contacts
      avatar
      last_seen
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers($input: DeleteUsersInput!) {
    deleteUsers(input: $input) {
      user_id
      name
      passcode
      contacts
      avatar
      last_seen
    }
  }
`;
export const createMessages = /* GraphQL */ `
  mutation CreateMessages($input: CreateMessagesInput!) {
    createMessages(input: $input) {
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
export const updateMessages = /* GraphQL */ `
  mutation UpdateMessages($input: UpdateMessagesInput!) {
    updateMessages(input: $input) {
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
export const deleteMessages = /* GraphQL */ `
  mutation DeleteMessages($input: DeleteMessagesInput!) {
    deleteMessages(input: $input) {
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
