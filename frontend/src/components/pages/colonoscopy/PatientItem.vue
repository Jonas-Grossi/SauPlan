<template>
    <div class="patient-item">
        <router-link :to="{ name: 'patientById', params: { id: patient.id } }">
            <div class="patient-item-image d-none d-sm-block">
                <img v-if="patient.imageUrl"
                    :src="patient.imageUrl"
                    height="150" width="150" alt="Patient">
                <img v-else
                    src=""
                    height="150" width="150" alt="Patient">
            </div>
            <div class="patient-item-info">
                <h2>{{ patient.name }}</h2>
                <p>{{ patient.description }}</p>
                <span class="patient-item-author">
                    <strong>Autor: </strong>{{ patient.author }}
                </span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'PatientItem',
    props: ['patient']
}
</script>

<style>
    .patient-item {
        border-radius: 8px;
        margin-bottom: 20px;
        background-color: #FFF;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }

    .patient-item a {
        display: flex;
        align-items: flex-start;
        text-decoration: none;
        color: #000;
    }

    .patient-item-info h2 {
        font-size: 1.7rem;
    }

    .patient-item-image {
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid #AAA;
    }

    .patient-item-image img {
        border-radius: 5px;
    }

    .patient-item-info {
        display: flex;
        align-self: stretch;
        flex-direction: column;
    }

    .patient-item-info p {
        flex: 1;
        color: #555;
        font-size: 1.1rem;
    }
</style>
