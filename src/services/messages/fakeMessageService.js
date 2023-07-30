
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
    finding: "ccc c ",
    detailed_finding: "CC BBC",
    risk: "risk  CC BBC",
    recommendation: "BBC  CC recommendation",
    detailed_finding_status: "complete",
    riskRating: "Very High",
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

  async listMessages(callback) {
    await delay(1000);
    // Call the callback with the messages data

    callback(messages);

    // Return an unsubscribe function
    return () => {
      console.log('Unsubscribed');
    };
  }

};
