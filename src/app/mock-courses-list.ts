import {Course} from './course';

const defaultDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
const mockDate: Date = new Date('Mon Sep 9 2019 20:57:49 GMT+0300 (Moscow Standard Time)'); 
export const COURSES: Course[] = [
    { id: 1, name: 'Course 1', description: defaultDescription, duration: 88, date: new Date(mockDate) },
    { id: 2, name: 'Course 2', description: defaultDescription, duration: 88, date: new Date(mockDate) },
    { id: 3, name: 'Course 3', description: defaultDescription, duration: 88, date: new Date(mockDate) },
    { id: 4, name: 'Course 4', description: defaultDescription, duration: 88, date: new Date(mockDate) },
]