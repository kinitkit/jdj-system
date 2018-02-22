import { observable, action, computed } from 'mobx';

class SampleStore {
    @observable sample = [];

    @action addSample = (sample) => {
        this.sample.push(sample);
    }

    @computed get sampleCount() {
        return this.sample.length;
    }
}

const store = new SampleStore();

export default store;