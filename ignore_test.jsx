function TestInputWithFocusbutton(props) {
    const inputElem = useRef(null);

    const onButtonClick = () => { inputElem.current.focus(); };

    return (
        <>
            <input ref={inputElem} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}