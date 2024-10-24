// src/eventBus.js
import { reactive } from 'vue';

export const eventBus = reactive({
    id: null,
    send(id) {
        this.id = id;
    }
});
