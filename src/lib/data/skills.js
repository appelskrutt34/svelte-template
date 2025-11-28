const high = "high";
const medium = "medium";
const technique = "technique";
const tool = "tool";
const language = "language";

export const htb = [
  { title: "Type Juggling", category: technique, skill: high },
  { title: "Prototype Pollution", category: technique, skill: high },
  { title: "Timing Attacks", category: technique, skill: high },
  { title: "Race Conditions", category: technique, skill: high },
  { title: "Deserialization Attacks", category: technique, skill: high },
  { title: "Parameter Logic Bugs", category: technique, skill: high },
  { title: "Blind SQL Injections", category: technique, skill: high },
  { title: "Boolean-Based SQL Injections", category: technique, skill: high },
  { title: "Time-Based SQL Injections", category: technique, skill: high },
  { title: "Error-Based SQL Injections", category: technique, skill: high },
  { title: "DNS Rebinding", category: technique, skill: high },
  { title: "IDOR", category: technique, skill: high },
  { title: "Websocket Attacks", category: technique, skill: medium },
  { title: "CRLF Injection", category: technique, skill: high },
  { title: "HTTP Request Smuggling", category: technique, skill: high },
  { title: "HTTP/2 Downgrading", category: technique, skill: high },
  { title: "Web Cache Poisoning", category: technique, skill: high },
  { title: "Host Header Attacks", category: technique, skill: high },
  { title: "Session Puzzling", category: technique, skill: high },
  { title: "XSS", category: technique, skill: high },
  { title: "JWT Attacks", category: technique, skill: high },
  { title: "OAuth Attacks", category: technique, skill: medium },
  { title: "SAML Attacks", category: technique, skill: medium },
  { title: "NOSQL Injections", category: technique, skill: high },
  { title: "XPath Injections", category: technique, skill: high },
  { title: "LDAP Injections", category: technique, skill: high },
  { title: "BurpSuit", category: tool, skill: high },
  { title: "Kali Linux", category: tool, skill: high },
  { title: "ffuf", category: tool, skill: high },
  { title: "wfuzz", category: tool, skill: high },
];

export const languages = [
  { title: "C#", category: language, skill: high },
  { title: "JavaScript", category: language, skill: high },
  { title: "SQL", category: language, skill: medium },
  { title: "Python", category: language, skill: medium },
  { title: "Solidity", category: language, skill: medium },
  { title: "HTML", category: language, skill: high },
  { title: "CSS", category: language, skill: high },
];

export const other = [
  { title: "Svelte", category: tool, skill: high },
  { title: "Vue", category: tool, skill: medium },
  { title: "React", category: tool, skill: medium },
  { title: ".NET", category: tool, skill: high },
  { title: ".NET Core", category: tool, skill: high },
  { title: "ASP.NET", category: tool, skill: high },
  { title: "ASP.NET Core", category: tool, skill: high },
  { title: "Azure Devops", category: tool, skill: high },
  { title: "Github Actions", category: tool, skill: high },
  { title: "Linux", category: tool, skill: high },
  { title: "Tailwind", category: tool, skill: high },
];
