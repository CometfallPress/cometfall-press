import {useCallback, useEffect, useRef, useState} from "react";

// eslint-disable-next-line react/prop-types
function Scaler({ classNames = "", scale = 1, children }) {

    const ref = useRef(null);
    const [s, setScale] = useState(scale);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (!ref.current) return;
        let rafId = null;

        const measure = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect()
            // const diff = ref.current.clientHeight - rect.height
            setContentHeight?.(rect.height)
        };

        const ro = new ResizeObserver(() => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(measure);
        });

        measure();
        ro.observe(ref.current);
        rafId = requestAnimationFrame(measure);

        return () => {
            ro.disconnect();
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [s]);

    return (
        <div style={{ height: `${contentHeight}px`, overflowX: 'clip'}}>
            <div
                className={classNames}
                ref={ref}
                style={{
                    transform: `scale(${s})`,
                    transformOrigin: "50% 0",
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default Scaler