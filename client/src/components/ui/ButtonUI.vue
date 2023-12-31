<template>
    <button class="button" :class="classList" :disabled="disabled">
        <div class="button-inner">
            <slot v-if="!loading && (icon || !text)"></slot>
            <LoadingUI v-if="loading" :width="20" color="#ffffff" />
            <span v-if="text">{{ text }}</span>
        </div>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoadingUI from '@/components/ui/LoadingUI.vue';

export default defineComponent({
    name: 'ButtonUI',
    components: { LoadingUI },
    props: {
        rounded: {
            type: Boolean,
            default: false,
        },
        drawer: {
            type: Boolean,
            default: false,
        },
        edit: {
            type: Boolean,
            default: false,
        },
        medium: {
            type: Boolean,
            default: false,
        },
        secondary: {
            type: Boolean,
            default: false,
        },
        border: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: '',
        },
    },

    computed: {
        classList(): string[] {
            const classList = [];
            if (this.rounded) classList.push('button-rounded');
            if (this.drawer) classList.push('button-drawer');
            if (this.edit) classList.push('button-edit');
            if (this.medium) classList.push('button-medium');
            if (this.secondary) classList.push('button-secondary');
            if (this.border) classList.push('button-border');
            if (!this.text) classList.push('button-only-icon');
            return classList;
        },
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    background: linear-gradient(87.59deg, #d10101 3.43%, #ff5a5a 99.54%);
    outline: none;
    border: none;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.1s ease-in-out;

    .button-inner {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    span {
        color: #fff;
    }

    &:hover {
        transform: scale(1.025);
    }
}

.button-rounded {
    border-radius: 4px;
}

.button-drawer {
    font-size: 14px;
    font-weight: 400;
    height: 64px;
    width: 50%;

    &:hover {
        transform: none;
    }
}

.button-edit {
    font-size: 12px;
    font-weight: 400;
    height: 32px;
    padding: 0 14px;
    background: $primary-edit-color;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);

    &:hover {
        background: #e98080;
    }

    span {
        color: $primary-text-color;
    }

    .icon-wrap svg path {
        fill: $primary-text-color;
    }

    &:hover {
        transform: none;
    }
}

.button-medium {
    font-size: 16px;
    font-weight: 400;
    height: 40px;
    padding: 0 32px;

    &:hover {
        transform: none;
    }
}

.button-border {
    border: 1px solid $secondary-text-color;
}

.button-secondary {
    background: #ffffff;

    &:hover {
        background: #f5f5f5;
    }

    span {
        color: $primary-text-color;
    }

    .icon-wrap svg path {
        fill: $primary-text-color;
    }
}

.button-only-icon {
    width: 32px;
}

.button[disabled] {
    background: #c7c7c7;
    cursor: not-allowed;
}

.button-drawer.button-secondary {
    background: $primary-text-color;

    &:hover {
        background: #2a2a2a;
    }

    span {
        color: #ffffff;
    }
}
</style>
