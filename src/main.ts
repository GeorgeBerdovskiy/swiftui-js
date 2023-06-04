import './assets/style.css'

import { main } from './main.swift'

// Import test tree JSON
import { textBetweenSpacersHstack } from './test-trees/Trees'

// Import SJS functions
import { mount } from '../packages/sjs/index';

let base = document.querySelector<HTMLDivElement>('#base')!

console.log(main)
mount(main, base);