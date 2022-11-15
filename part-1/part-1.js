/**
 * Refer to the following data when completing your answers: (The following JSON
 * file contains providers available for an industry)
 */
// import { Aggregator } from 'mingo/aggregator';
// import { useOperators, OperatorType } from 'mingo/core';
// import { $match, $group } from 'mingo/operators/pipeline';
const Aggregator = require('mingo/aggregator');
const Core = require('mingo/core');
const $Pipeline = require('mingo/operators/pipeline');
const PROVIDERS = require('../shared/data.json');

/**
 * Create a query that returns total premiums and fees available for retail industry
 */
function task1() {
  let criteria = { industry: 'retail' };

  // let query = new Query(criteria);

  // let cursor = query.find(PROVIDERS);
  // for (let value of cursor) {
  //   console.log(value);
  // }
  // return cursor.all();
  Core.useOperators(Core.OperatorType.PIPELINE, { $match });

  let agg = new mingo.Aggregator([
    { $match: { industry: 'retail' } },
    // {'$group':{'_id':'$student_id', 'score':{$min:'$score'}}},
    // {'$sort':{'_id': 1, 'score': 1}}
  ]);

  let result = agg.stream(PROVIDERS);
  console.log('====', result.all());
  return result.all();

  /**
   * TODO: Your body goes here
   */
}

/**
 * Create a query that returns the minimum premium available among the providers for technology industry
 */
function task2() {
  /**
   * TODO: Your body goes here
   */
}

/**
 * Create a query that returns all the provider names available for the technology industry
 * that has a premium amount greater than or equal to 1000
 */
function task3() {
  /**
   * TODO: Your body goes here
   */
}

/**
 * To see the expected results, please refer to ./expected-data.json file in part-1 directory!
 * NOTE: Please ensure that all the tests in part-1.spec.js are passing!
 */

module.exports = {
  task1,
  task2,
  task3,
};
