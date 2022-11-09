import { CircleNotch } from "phosphor-react";

export function Loader() {
    return (
        <div className="flex-1 flex items-center justify-center">
            <CircleNotch size={64}>
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="1s"
                    from="0 0 0"
                    to="360 0 0"
                    repeatCount="indefinite"
                />
            </CircleNotch>
        </div>
    );
}
