import * as dataClasses from './classes';

const Data = (type, data) => new dataClasses[type](data);

export default Data;
