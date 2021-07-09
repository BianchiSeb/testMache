class PlayoffReporter {
    onRunComplete(contexts, results) {
      console.log();
      console.log(`Failed: ${results.numFailedTests}/${results.numTotalTests}`);
      console.log(`Success: ${results.numPassedTests}/${results.numTotalTests}`);
    }
  }
  
  module.exports = PlayoffReporter;
  