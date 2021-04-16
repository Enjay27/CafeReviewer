export const OPEN = "@@SUJIN/OPEN";
export const CLOSE = "@@SUJIN/CLOSE";

//다음에 payload로 다른 모달창에 적용할 수 있음
export const open = () => ({
    type : OPEN
});

export const close = () => ({
   type : CLOSE
});