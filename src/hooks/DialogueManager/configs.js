import dataStoryTypes from 'data/json/storyTypes.json';

const STORY_TYPES = {};

dataStoryTypes.forEach((type) => (STORY_TYPES[type] = type));

const DEFAULT_USERNAME = 'Moi';

export { STORY_TYPES, DEFAULT_USERNAME };
