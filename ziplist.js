/**
 * Implements Ziplist function for Experience 27
 * Created by danielkoo808 on 9/19/16.
 */

const testlist1 = ['a', 'b', 'c'];
const testlist2 = [1, 2, 3];

function ziplist(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}

console.log(ziplist(testlist1, testlist2));

function zipListSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListSimpleWay(testlist1, testlist2));
