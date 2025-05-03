<script setup>
import { ref } from 'vue';
import { useEventsStore } from '../state/state.js';

const showModal = ref(false);
const eventsStore = useEventsStore();

const formData = ref({
    title: '',
    date: '',
    location: '',
    description: '',
    is_private: 0
});

const openModal = () => {
    showModal.value = true;
};

const submitForm = async () => {
    try {
        const response = await fetch('/api/create_event.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(formData.value)
        });
        const rawText = await response.text();
        console.log("Nyers válasz:", rawText); 
        let data;
        try {
            data = JSON.parse(rawText);
        } catch (e) {
            throw new Error(`Érvénytelen JSON: ${rawText.substring(0, 50)}...`);
        }
        if (!data.success) {
            throw new Error(data.message);
        }

        alert('Esemény létrehozva!');
    } catch (error) {
        alert(`Hiba: ${error.message}`);
        console.log("Küldött dátum:", formData.value.date);
    }
};
</script>

<template>
    <div>
        <button @click="openModal" class="create-button">
            <i class="fas fa-plus"></i>
        </button>
        <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
                <span class="close" @click="showModal = false">&times;</span>
                <h2>Új Esemény Létrehozása</h2>
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label>Cím:</label>
                        <input v-model="formData.title" required>
                    </div>
                    <div class="form-group">
                        <label>Dátum és idő:</label>
                        <input v-model="formData.date" type="datetime-local"
                            :min="new Date().toISOString().slice(0, 16)" step="60" required>
                    </div>
                    <div class="form-group">
                        <label>Helyszín:</label>
                        <input v-model="formData.location" required>
                    </div>
                    <div class="form-group">
                        <label>Leírás:</label>
                        <textarea v-model="formData.description"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Láthatóság:</label>
                        <select v-model="formData.is_private" class="form-control">
                            <option :value="0">Publikus</option>
                            <option :value="1">Privát</option>
                        </select>
                    </div>

                    <button type="submit" class="submit-btn">Létrehozás</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.create-button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    left: auto;
    z-index: 1000;
    background: #5E3674;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.create-button:hover {
    transform: scale(1.1);
    background: #451f5a;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    background: rgba(0, 0, 0, 0.8);
    padding: 2rem;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    color: #a88db8;
    border: 1px solid #5E3674;
}

.close {
    float: right;
    cursor: pointer;
    font-size: 28px;
    color: #a88db8;
}

h2 {
    margin-bottom: 1.5rem;
    color: #d6beb0;
    border-bottom: 2px solid #5E3674;
    padding-bottom: 0.5rem;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #d6beb0;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #5E3674;
    border-radius: 4px;
    color: #d6beb0;
}

.submit-btn {
    width: 100%;
    padding: 0.8rem;
    background: #5E3674;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-btn:hover {
    background: #451f5a;
}

@media (max-width: 768px) {
    .modal-content {
        padding: 1rem;
    }

    .create-button {
        width: 50px;
        height: 50px;
        font-size: 20px;
    }
}
</style>