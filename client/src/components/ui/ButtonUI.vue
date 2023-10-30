<template>
    <button class="button" :class="classList" :disabled="disabled">
        <div class="button-inner">
            <slot v-if="icon || !text"></slot>
            <span v-if="text">{{ text }}</span>
        </div>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ButtonUI',
    props: {
        rounded: {
            type: Boolean,
            requiered: false,
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
    background: $primary-color;
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
        background: #d13122;
    }
}

.button-rounded {
    border-radius: 4px;
}

.button-drawer {
    font-size: 14px;
    font-weight: 400;
    height: 72px;
    width: 50%;

    &:hover {
        transform: none;
    }
}

.button-edit {
    font-size: 12px;
    font-weight: 400;
    height: 28px;
    padding: 0 10px;
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
    width: 28px;
}

.button[disabled] {
    background: #c7c7c7;
}
</style>
