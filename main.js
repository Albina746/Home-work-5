

function repeatAction(n, action) {
    for (let i = 1; i <= n; i++) {
        action(i)
    }
}

repeatAction(3, (step) => {
    console.log(`Шаг номер ${step}`);
});