
const messages = [
  {
    id: 0,
    finding: "The cost model includes late fee which is against company policy",
    detailed_finding: "ABC",
    risk: "risk ABC",
    recommendation: "ABC recommendation",
    detailed_finding_status: "complete",
    riskRating: "Low",
    timestamp: new Date()
  },
  {
    id: 1,
    finding: "b",
    detailed_finding: "BBC",
    risk: "risk BBC",
    recommendation: "BBC recommendation",
    detailed_finding_status: "pending",
    riskRating: "High",
    timestamp: new Date()
  },
  {
    id: 2,
    audit_answers: {
      finding: "ccc c ",
      detailed_finding: "CC BBC",
      risk: "risk  CC BBC",
      recommendation: "BBC  CC recommendation",
      riskRating: "Very High",
    },
    
    detailed_finding_status: "complete",

    timestamp: new Date()
  }
]

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default {
  async createMessage(messageObj, requestType) {
    await delay(1000);
    messages.push(messageObj);
  },
  async updateMessage(documentId, message) {
    await delay(1000);
    messages[documentId] = { ...messages[documentId], ...message };
  },

  async deleteMessage(documentId) {
    await delay(1000);
    messages.splice(documentId, 1);
  },



  async listMessages() {
    await delay(1000);
    // Call the callback with the messages data
    return messages;
    // callback(messages);

    // Return an unsubscribe function
    // return () => {
    //   console.log('Unsubscribed');
    // };
  }

};

/*
{
  "time": 1621340388122,
  "blocks": [
    {
      "type": "header",
      "data": {
        "text": "Detailed Findings",
        "level": 2
      }
    },
    {
      "type": "list",
      "data": {
        "style": "unordered",
        "items": [
          "The cost model currently in use includes a late fee."
        ]
      }
    },
    {
      "type": "list",
      "data": {
        "style": "unordered",
        "items": [
          "This late fee inclusion is in direct violation of the company's established policies.",
          "There is no clear documentation or justification provided for the inclusion of this late fee.",
          "The late fee has led to an inflation of costs in the cost model."
        ]
      }
    },
    {
      "type": "list",
      "data": {
        "style": "unordered",
        "items": [
          "The late fee has been applied indiscriminately across all transactions, regardless of their nature or timing."
        ]
      }
    }
  ],
  "version": "2.19.0"
}
*/