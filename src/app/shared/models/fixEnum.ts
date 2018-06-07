function fixEnum(myEnum: any): void {
	class EnumMember extends Number {
		toString(): string {
			return myEnum[this.valueOf()]
		}
		inspect(): string {
			return this.toString();
		}
	}

	for (let key in myEnum) {
		if ((typeof key !== 'string') || (parseInt(key).toString() === key)) {
			console.log(`not touching ${key}`)
			continue;
		}
		const oldVal = myEnum[key];
		if (typeof oldVal !== 'number') {
			throw new Error(`unexpected! enum[${key}: ${typeof key}] == ${oldVal}: ${typeof oldVal}`);
		}
		myEnum[key] = new EnumMember(oldVal);

	}
}