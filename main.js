// This is the main function for performing the sLoreta signal filter and visualizer

////////////////////////////////////////////////////////////////////////////////////
// Using Fake EEG Electrodes for Testing the sLoreta Function					 //
///////////////////////////////////////////////////////////////////////////////////

// Creating a Time Vector for To Input Into Sin Function 
// for the Fake EEG Electrodes

function makeArr(startValue, stopValue, cardinality) {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(startValue + (step * i));
  }
  return arr;
}

// TimeVector consists of 1200 seconds of data
// starting at 0, in 0.001 second increments

TimeVector = makeArr(0, 1200, 1200001);

// Fake EEG Data consists of sin functions
// Creating w0 [omega_naught] for phase shifts
// for Fake EEG channels. This is expressed in 
// Radians for Math.sin function

w0 = makeArr(0, 2*Math.Pi, 8)

// Fake EEG Data
// Channels of EEG Data is 8

EEGChannel1 = Math.sin(TimeVector + w0[0])

EEGChannel2 = Math.sin(TimeVector + w0[1])

EEGChannel3 = Math.sin(TimeVector + w0[2])

EEGChannel4 = Math.sin(TimeVector + w0[3])

EEGChannel5 = Math.sin(TimeVector + w0[4])

EEGChannel6 = Math.sin(TimeVector + w0[5])

EEGChannel7 = Math.sin(TimeVector + w0[6])

EEGChannel8 = Math.sin(TimeVector + w0[7])



