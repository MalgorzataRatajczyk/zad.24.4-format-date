const formatDate = (timeInSeconds) => {
  let second = `${timeInSeconds}`;
  let minute = 0;
  let hour = 0;
  
  if (second < 60) {
    return second + 's';
  }
  else if (second < 3600) {
	minute = Math.floor(second/60);
	newtime = second - 60*minute;
	if (newtime === 0) {
	  return minute+'m'; 
	}
	else {
      return minute+'m '+newtime+'s';
    }
  }
  else if (second >= 3600) {
    hour = Math.floor(second/3600);
    minute = Math.floor((second - 3600*hour)/60);
    newtime = second - (3600*hour+ 60*minute);
    if (newtime === 0 && minute === 0) {
      return hour + 'h';
    }
    else if (newtime === 0) {
      return hour + 'h ' + minute+ 'm';
    }
    else if (minute === 0) {
      return hour + 'h ' + newtime+ 's';
    }
    else {
      return hour + 'h ' + minute+ 'm '+ newtime + 's';
    }
  }
  else {
    return '0s';
  }
}

module.exports = formatDate;