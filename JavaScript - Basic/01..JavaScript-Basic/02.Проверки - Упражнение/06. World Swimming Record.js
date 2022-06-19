function swimmingRecord(input) {
  const recordInSec = Number(input[0]);
  const distanceInMeters = Number(input[1]);
  const secMetter = Number(input[2]);

  const distanceSeconds = distanceInMeters * secMetter;
  const delayMetters = Math.floor(distanceInMeters / 15) * 12.5;
  const totalTime = distanceSeconds + delayMetters;
  const diffrends = Math.abs(recordInSec - totalTime);
  if ( recordInSec >  totalTime ){
      console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
  } else {
      console.log(`No, he failed! He was ${diffrends.toFixed(2)} seconds slower.`);
  }

}
swimmingRecord(["10464", "1500", "20"]);
swimmingRecord(["55555.67", "3017", "5.03"]);
