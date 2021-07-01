/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($user_id: Int!) {
    getUsers(user_id: $user_id) {
      user_id
      name
      passcode
      contacts
      avatar
      last_seen
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: TableUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        user_id
        name
        passcode
        contacts
        avatar
        last_seen
      }
      nextToken
    }
  }
`;
export const getMessages = /* GraphQL */ `
  query GetMessages($message_id: Int!) {
    getMessages(message_id: $message_id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: TableMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        message_id
        sent_by
        channel
        type
        message
        file_url
        time
      }
      nextToken
    }
  }
`;
