function atividade1() {
    const container = document.createElement("div");
    container.classList.add("crossword");

    container.innerHTML = `
        <table>
                        <!-- Linha 1 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>8</td>
                            <td>:</td>
                            <td><input id="game-1-n1" type="number" maxlength="1"></td>
                            <td>=</td>
                            <td>1</td>
                            <td style="border: none;"></td>
                            <td><input type="number" id="game-1-n2"></td>
                            <td>x</td>
                            <td>1</td>
                            <td>=</td>
                            <td><input type="number" id="game-1-n3"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                        </tr>
                        <!-- Linha 2 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>:</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>x</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                        </tr>
                        <!-- Linha 3 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td><input type="number" id="game-1-n4"></td>
                            <td>×</td>
                            <td>1</td>
                            <td>=</td>
                            <td><input type="number" id="game-1-n5"></td>
                            <td style="border: none;"></td>
                            <td>6</td>
                            <td>:</td>
                            <td>2</td>
                            <td>=</td>
                            <td><input type="number" id="game-1-n6"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                        </tr>
                        <!-- Linha 4 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>:</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                        </tr>
                        <!-- Linha 5 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>4</td>
                            <td>:</td>
                            <td><input type="number" id="game-1-n7"></td>
                            <td>=</td>
                            <td>2</td>
                            <td style="border: none;"></td>
                            <td>9</td>
                            <td>:</td>
                            <td><input type="number" id="game-1-n8"></td>
                            <td>-</td>
                            <td>9</td>
                            <td style="border: none;"></td>
                            <td><input type="number" id="game-1-n9"></td>
                        </tr>
                        <!-- Linha 6 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>x</td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td>:</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>:</td>
                        </tr>
                        <!-- Linha 7 -->
                        <tr>
                            <td><input type="number" id="game-1-n10"></td>
                            <td>:</td>
                            <td>7</td>
                            <td>=</td>
                            <td>1</td>
                            <td style="border: none;"></td>
                            <td><input type="number" id="game-1-n11"></td>
                            <td>x</td>
                            <td>3</td>
                            <td>=</td>
                            <td><input type="number" id="game-1-n12"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>3</td>
                        </tr>
                        <!-- Linha 8 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>x</td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td>x</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                        </tr>
                        <!-- Linha 9 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td><input type="number" id="game-1-n13"></td>
                            <td style="border: none;"></td>
                            <td><input type="number" id="game-1-n14"></td>
                            <td>:</td>
                            <td><input type="number" id="game-1-n15"></td>
                            <td>=</td>
                            <td><input type="number" id="game-1-n16"></td>
                            <td style="border: none;"></td>
                            <td>0</td>
                            <td>x</td>
                            <td>7</td>
                            <td>=</td>
                            <td><input type="number" id="game-1-n17"></td>
                        </tr>
                        <!-- Linha 10 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                        </tr>
                        <!-- Linha 11 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>7</td>
                            <td>:</td>
                            <td>1</td>
                            <td>=</td>
                            <td><input type="number" id="game-1-n18"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td><input type="number" id="game-1-n19"></td>
                            <td>:</td>
                            <td>5</td>
                            <td>=</td>
                            <td><input type="number" id="game-1-n20"></td>
                        </tr>
                    </table>
    `;

    return container;
}
document.getElementById("game-container").appendChild(atividade1());


const abrirmodal = document.querySelector('#cliqueaqui')
abrirmodal.addEventListener('click', () => {
    const modal = document.createElement("div");
    modal.classList.add("bgmodal");
    modal.innerHTML = `
        <div class="modal">
            <h1>AGRADECIMENTOS À PROFESSORA ELZA!</h1>
            <div class="prof">
                <img src="./src/assets/elza.png"></img>
            </div>
        </div>
    `
    document.querySelector('body').appendChild(modal)
})