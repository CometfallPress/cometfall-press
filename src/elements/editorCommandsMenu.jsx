/* eslint-disable no-unused-vars */
import {useCallback, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {Delta} from "quill/core";


function EditorCommandsMenu(props) {

    const [editor, setEditor] = useState(null);
    const lastRangeRef = useRef(null);
    const [slashAt, setSlashAt] = useState("");
    const slashAtRef = useRef(slashAt);
    const [menu, setMenu] = useState({
        visible: false,
        top: 0,
        left: 0,
        selected: 0,
    });
    const template = new Delta()
    let commands;
    commands = [
        {
            label: "Insert Newsletter User's Name",
            match: "/username",
            action: (ed, range) => {
                let username = "{{username}} "
                let s = slashAtRef.current
                let text = ed.getText();
                let index = text.indexOf(s);
                if (index !== -1) {
                    ed.deleteText(index,s.length);
                    ed.insertText(index, username);
                    ed.setSelection(index + username.length);
                }
            },
        },
        {
            label: "Divider",
            match: "/divider",
            action: (ed, range) => {
                let s = slashAtRef.current
                let text = ed.getText()
                let index = text.indexOf(s);
                if (index !== -1) {
                    ed.deleteText(index,s.length);
                    ed.insertEmbed(index, "horizontalRule", true);
                    ed.setSelection(index + 2);
                }
            },
        },
        {
            label: "Replace with Template",
            match: "/template",
            action: (ed, range) => {
                ed.setContent(template);
            },
        },
    ];
    const [commandsFiltered, setCommandsFiltered] = useState(commands);

    const openMenu = useCallback(() => {
        let range = editor.getSelection();
        const slashBounds = editor.getBounds(range.index);
        const toolbarRect = editor.container.parentNode.children[0].getBoundingClientRect();

        setMenu(prev => ({
            ...prev,
            top: toolbarRect.bottom + slashBounds.top - 90,
            left: slashBounds.left,
            visible: true,
        }));

    }, [editor])

    const closeMenu = useCallback(() => {
        setMenu((prev) => ({ ...prev, visible: false, selected: 0 }));
        setSlashAt("");
        setCommandsFiltered(commands);
    }, [commands])

    const runCommand = () => {
        if (!menu.visible) return true;
        const range = editor.getSelection() || lastRangeRef.current;
        const cmd = commandsFiltered[menu.selected];
        if (cmd) cmd.action(editor, range);
        closeMenu();
        return false;
    }

    useEffect(() => {
        slashAtRef.current = slashAt
    }, [slashAt]);

    useEffect(() => {
        if (!props.quillRef.current) return;
        const ed = props.quillRef.current.getEditor()
        setEditor(ed);
    }, [props.quillRef]);

    useEffect(() => {
        if (!editor) return;

        const updateMenu = (delta, oldDelta, source) => {
            let range = editor.getSelection();
            if (!range) return;
            lastRangeRef.current = range;

            let [ls, os] =  editor.getLine(range.index);
            let words = ls.domNode.innerText.slice(0, os + 1).split(/\s+/);
            let word = words[words.length - 1]

            if (word.includes("/")) {
                setSlashAt(word);

                if (!menu.visible) {
                    openMenu()
                }

                let filtered = [...commands].filter((c) => c.match.includes(word))
                if (filtered.length > 0) {
                    setCommandsFiltered(filtered);
                    setMenu(prev => ({...prev, selected: Math.min(prev.selected, filtered.length-1)}))
                }
                else {
                    closeMenu()
                }
            }
            else {
                closeMenu()
            }
        };

        // Up Arrow
        editor.keyboard.addBinding({ key: "ArrowUp" }, (range, context) => {
            if (!menu.visible) return true;

            setMenu(prev => ({
                ...prev,
                selected: prev.selected - 1 < 0 ? commandsFiltered.length - 1: prev.selected - 1,
            }));

            return false;
        });


        // Down Arrow
        editor.keyboard.addBinding({ key: "ArrowDown" }, (range, context) => {
            if (!menu.visible) return true;

            setMenu(prev => ({
                ...prev,
                selected: prev.selected + 1 >= commandsFiltered.length ? 0 : prev.selected + 1,
            }));

            return false;
        });

        editor.on("text-change", updateMenu);
        editor.on("selection-change", updateMenu);

        return () => {
            editor.off("text-change", updateMenu);
            editor.off("selection-change", updateMenu);
        };

    },[closeMenu, commands, commandsFiltered, editor, menu, openMenu, slashAt])

    useEffect(() => {
        if (!editor) return;

        const enterBinding = {
            key: "Enter",
            handler(range, context) {
                return runCommand()
            },
        };

        editor.keyboard.bindings.Enter.unshift(enterBinding);

        return () => {
            const arr = editor.keyboard.bindings.Enter;
            const i = arr.indexOf(enterBinding);
            if (i !== -1) arr.splice(i, 1);
        };
    }, [closeMenu, commandsFiltered, editor, menu.selected, menu.visible]);

    return (
        <>
            <div
                className={`${menu.visible?"visible":"invisible"} absolute w-80 p-2 rounded-2xl bg-white dropshadow-md text-black outline-slate-200 outline z-50 origin-top object-top-left`}
                style={{
                    top: menu.top,
                    left: menu.left,
                }}
            >
                {commandsFiltered.map((command, index) => {
                    return (
                        <div
                            key={index}
                            className={`${menu.selected===index?"bg-slate-200":"bg-white"} border-b-slate-200 border-b last:border-b-0 flex flex-col w-full rounded-2xl p-2`}
                            onMouseOver={() => {setMenu(prev => ({...prev, selected: index}))}}
                            onClick={() => { runCommand() }}
                        >
                            <p className="text-md">{command.match}</p>
                            <p className="text-sm">{command.label}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

EditorCommandsMenu.propTypes = {
    quillRef: PropTypes.any.isRequired,
}

export default EditorCommandsMenu;