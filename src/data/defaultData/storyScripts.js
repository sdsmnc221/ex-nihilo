import StoryScript from 'data/classes/StoryScript';
import dataStoryScripts from 'data/json/storyScripts';

const storyScripts = dataStoryScripts.map((script) => new StoryScript(script));

export default storyScripts;
