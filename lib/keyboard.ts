import { KeyboardEvent } from "react";

export const isInvalidInputChar = (event: KeyboardEvent) => {
    const isInvalid = event.altKey ||
        event.ctrlKey ||
        (event.key === "Shift") ||
        (event.key === 'AltGraph') ||
        (event.key === 'CapsLock') ||
        (event.key === 'Fn') ||
        (event.key === 'FnLock') ||
        (event.key === 'Hyper') ||
        (event.key === 'Meta') ||
        (event.key === 'NumLock') ||
        (event.key === 'ScrollLock') ||
        (event.key === 'Super') ||
        (event.key === 'Symbol') ||
        (event.key === 'SymbolLock') ||
        (event.key === 'Tab') ||
        (event.key === 'ArrowDown') ||
        (event.key === 'ArrowLeft') ||
        (event.key === 'ArrowRight') ||
        (event.key === 'ArrowUp') ||
        (event.key === 'End') ||
        (event.key === 'Home') ||
        (event.key === 'PageDown') ||
        (event.key === 'PageUp') ||
        (event.key === 'Clear') ||
        (event.key === 'Copy') ||
        (event.key === 'CrSel') ||
        (event.key === 'Cut') ||
        (event.key === 'Delete') ||
        (event.key === 'EraseEof') ||
        (event.key === 'ExSel') ||
        (event.key === 'Insert') ||
        (event.key === 'Paste') ||
        (event.key === 'Redo') ||
        (event.key === 'Undo') ||
        (event.key === 'Enter' && event.code === 'NumpadEnter') ||
        (event.key === 'Alt');

    return isInvalid;

}