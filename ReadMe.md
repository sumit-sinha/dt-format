# Date Time Formatter

A utility class to format `Date` object in Javascript. It is heavily influenced by `SimpleDateFormat` class of Java and follow most of its specifications

## Usage

Install the package using `npm` as shown below

```
npm install --save dt-format
```

You can import the `DateTimeFormat` class and use it as shown below

```javascript
const pattern = 'dd/MMM/yyyy';
console.info(MessageFormat.format(new Date(), pattern)); // 21/Jul/2018
```

## Supported Patterns

| Pattern  | Description                                                                  |
| ---------|:----------------------------------------------------------------------------:|
| d        | prints the current date i.e. 12, 21 etc                                      |
| dd       | prints the current date and add 0 as suffix if date is less then 10 e.g. 06  |
| MM       | prints the numeric representation of current month                           |
| MMM      | print the 3 digit string representing current month. E.g. Jun, Dec etc. Note: Only english is supported for now |
| MMMM     | print the full string representing a month. E.g. April, March etc. Note: Only english is supported for now |
| yy       | print the 2 digit representation of year |
| yyyy     | print the 4 digit representation of year |
| EE       | print a number representing the current day of week |
| EEE      | print a short string representing the current day of week i.e. Mon, Tue etc. Note: Only english is supported for now |
| EEEE     | print a string representing the current day of week. E.g. Monday, Tuesday etc. Note: Only english is supported for now |
| h        | print the hour in 12 hour format |
| hh       | print the hour in 12 hour format and suffix it with 0 if it is less than 10 i.e. 09, 07 etc. |
| H        | print the hour in 24 hour format        |
| HH       | print the hour in 24 hour format and suffix it with 0 if it is less than 10 i.e. 09, 07 etc. |
| m        | print the minute value                  |
| mm       | print the minute and suffix it with 0 if value less than 10 i.e. 09, 04 etc. |
| s        | print the second value                  |
| ss       | print the second and suffix it with 0 if value less than 10 i.e. 09, 04 etc. |
| S        | print the milli second value            |
| SS       | print the milli second and suffix it with 0 if value less than 10 i.e. 04, 06 etc. |
| SSS      | print the milli second and suffix it with 0 if value less than 100 i.e. 094, 067 etc. |
| a        | print AM or PM depending on hour        |
