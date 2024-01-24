/** 
Author : Build Rise Shine 

Created : 2023 

Script : Accounts Merge

Description : Write an algorithm to merge the given accounts

    - Given a list of accounts where each element accounts[i] is a list of strings, where the first 
      element accounts[i][0] is a name, and the rest of the elements are emails representing emails 
      of the account.

    - Now, we would like to merge these accounts. Two accounts definitely belong to the same person if 
      there is some common email to both accounts. Note that even if two accounts have the same name, 
      they may belong to different people as people could have the same name. A person can have any number 
      of accounts initially, but all of their accounts definitely have the same name.

    - After merging the accounts, return the accounts in the following format: the first element of 
      each account is the name, and the rest of the elements are emails in sorted order. The accounts 
      themselves can be returned in any order.

(c) Copyright by BRS Studio. 
**/

// Algorithm
let accountsMerge = function (accounts) {
  const parents = {};
  const email2name = {};

  const find = (x) => {
    if (parents[x] !== x) {
      parents[x] = find(parents[x]);
    }

    return parents[x];
  };

  const union = (x, y) => {
    parents[find(x)] = find(y);
  };

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!parents[email]) {
        parents[email] = email;
      }

      email2name[email] = name;
      union(email, emails[0]);
    }
  }

  const emails = {};
  for (const email of Object.keys(parents)) {
    const parent = find(email);
    if (parent in emails) {
      emails[parent].push(email);
    } else {
      emails[parent] = [email];
    }
  }

  return Object.entries(emails).map(([email, x]) => [
    email2name[email],
    ...x.sort(),
  ]);
};

// Implementation
const mergedAccounts = accountsMerge([
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"],
]);

console.log("The merged accounts for the given input is :");
console.log(mergedAccounts);

// BIG O Notation
// Time complexity -  O(N * M) - where N represents the number of accounts & M represents the average number of emails per account.
// Space complexity - O(N * M)
