function handle(list, val) {
	let begin = 0;
	let last = list.length - 1;

	while (begin <= last) {
		let center = Math.floor((begin + last) / 2);

		if (list[center] === val) {
			return center;
		}

		if (val < list[center]) {
			last = center - 1;
		} else {
			begin = center + 1;
		}
	}
	return -1;
}

console.log(handle([1,'5',3,4,6,0], 4));
