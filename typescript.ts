// tipos primitivos
// ts --w
// 1 - number
const x: number = 234243;


console.log(x)

// Type annotation e Type interface 
// Annotation é quando definimos o tipo de um dado manualmente;
// Inference é quando o TS indentifica e define o tipo de dado para nós.
const ann: string = "teste"
let inf = "teste2"
console.log("w234")

//// arrays (q nem c#)
let numberss: {id: string, teste: number}[] = [{id:"123", teste: 23}];
// tipo any -> qualquer tipo satisfaz a variável (evitar ele)

const arr1: any = [1, "teste", true, []]

// define o parâmetro de funções
function soma(a: number, b: number) {
  console.log(a + b)
}

soma(2, 4)

// define o retorno de funções
function some(a: number, b: number): void {
  let teste: number = a + b;
  return console.log("xa");
}

some(19999, 10)

// funções anônimas
setTimeout(() => {
  const sallary: number = 1000;
  console.log(sallary)
})

// determinar tipos de objetos {prop: tipo, prop2: tipo2}
function pass(coord: {x: number, y: number}) {
  console.log("x:", coord.x)
  console.log("y:", coord.y)
}
pass({x: 234, y: 2443})

// propriedades opcionais
function showNumbers(a: number, b?: number) {
  console.log("TRA", a)
}
showNumbers(2)

// union types -> alternativa melhor que o any, pode determinar dois tipos para um dado (number | string)
function showNra(teste: string | number): string | void  {
  console.log(typeof teste)
  if (typeof teste === "string") return "usuário não aprovado"!
  console.log(teste)
}
showNra("aa")

// type alis -> permite criar um tipo e determinar o que ele verifica, facilita ao inves de criar expressões complexas com union types
type ID = string | number;

function showId(id: ID) {
  console.log(`O ID é ${id}`)
};

showId(20)

// interfaces: outra maneira de nomear um tipo de objeto ; determina um nome para o tipo e escolhe quais as propriedades e seus tipos (esse recurso acaba sendo mais ultilizado)
interface point {
  x: number
  y: number
  z: number
}

/* -- isso:
function showCoords(obj: {x: number, y: number, z: number})
-- vira isso:
*/
function showCoords(obj: point) {
  console.log(obj.x, obj.y, obj.z)
}


const coordObj: point = {
  x: 10,
  y: 23,
  z: 4
}
showCoords(coordObj)

/* diferença entre type alias e interfaces:
-> Na maioria das vezes podemos optar entre qualquer um dos recursos sem problemas, a diferençe é que interface pode ser alterada ao longo do código, já o type alias, não
*/
// impelentando interface - interface x type alias 
interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = {name:"a", age:123}

type personType = {
  name: string
} // não pode modificar 

// literal types -> permite colocar valores como tipos, muito utilizado com union types
let test: "testando"
test = "testando"; // só aceita testando
console.log(test)

function showDirection(direction: "left" | "right" | "center") {
  console.log(direction)
}

showDirection("left")

// non-null assertion operator -> quando tem um elemento do dom, e a gente já sabe que esse valor está/será preenchido; as vezes o typescript evendicia u merro basead em um valor que no momento do código ainda não está disponível
// const p = document.getElementById("")
// console.log(p!.innetText)

// Bigint -> permite declarar números com valores muitos altos, pode utilizar notação literal (como 100n), para esse recurso precisa mudar para o ES2020 
let numbere: bigint
numbere = 1000n
console.log(numbere)

// Symbol -> cria uma referência única para um valor, ou seja, mesmo que ele possua o valor de outra variável, teremos valores sendo considerados diferentes 
let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB) // dá false

// NARROWING: recurso de TS para identifica tipos de dados, dá uma direção diferente a execução do programa, baseada no tipo deque foi identificado/ há situações que os tipos podem ser imprevisíveis, e queremos executar algo para cada uma das possibilidades, é fundamental para evitar erros do compilador
// TYPEOF TYPEGUARD: Validação d tipo utilizando typeof, todos os dados vem como string (tipo "string", "Number e tals")
//function sumb(a: number | string, b: number | string) {
 // if (typeof a === )
//}

// INSTANCEOF: além dos tipos primitivos; checa se um dado pertence a uma deteminada classe,, incluindo as nossas criadas
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}

const sarah = new User("sarah");
const pri = new SuperUser("pri");

if (pri instanceof SuperUser) {
  console.log("olá admin")
}

// OPERADOR IN -> CHECA SE EXISTE UMA PROPRIEDADE NO OBJETO
class Dog {
  name
  breed

  constructor(name: string, breed?: string) {
    this.name = name
    if (breed) {
      this.breed = breed
    }
  }
}

const bob = new Dog("Turca", "tra")

function details(dog: Dog) {
  if ('breed' in dog) {
    console.log("a raça é", dog.breed)
  }
}

details(bob)

// FUNÇÕES
// void (q nem no c#)
// callback com argummento: mesma coisa
function gre(name:string):string{ return "he" }

function wawa(f: (name:string) => string, userName:string) {
 console.log(userName)
}

wawa(gre, "we");

// Generics -> Estratégia para quando o tipo de retorno é relacionado ao tipo do argumento; tipo um item de array, que pode ser string, boolean ou number; normalmente são utilizada letras como t ou u para definir os generics, é uma convenção.
function lista<T>(listinha: T[]) {
    return listinha[0];
};

console.log(lista([1, 3, "teste :3   "]))

function merging<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

console.log(merging({"BLAGH": "ASDDSA", "MADS": 234}, ["LILA"]))

// CONSTRAINTS NAS GENERICS FUNCTIONS: As generic functions podem ter seu escopo reduzido por constraints; limitam os tipos que podem ser usados no generic, e faz com que ele seja menos abrangente.
function biggestNumber<T extends string | number>(num1: T, num2: T):number {
    const number1 = +num1;
    const number2 = +num2;
    return number1 + number2;
}

console.log(biggestNumber(2, 4))
console.log(biggestNumber("7", "1"))

// DEFINIR PARÂMETROS: Em generi functions tem que utilizar parâmetros de tipos semelhantes se não dá erro, também tem como determinar o tipo de parâmetro aceito, com uma sintaxe especial. OBS: OUTRO JEITO DE FAZER A MESMA COISA DE CIMA.De cima faz quando tem a opção de editar, de baixo faz quando pega algo pronto.
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
};

console.log(mergeArrays([2, 3, 4], [4, 5, 6])) 
console.log(mergeArrays<number | string>([3, 4, 5], [ "teste", "joinha"]))

// PARÂMETROS OPCIONAIS: Q NEM NULLABLE DO C#
function dizOh(name1: string, name2?: string): void {
    return console.log(`nome: ${name1}`)
}

dizOh("ulala")

// PARÂMETROS DEFAULT
function dizOhDEFAULT(name1: string, name2 = "LILIKA"): void {
    return console.log(`nome: ${name1}`)
}

dizOhDEFAULT("scoerl", "lala")

// TIPO UNKNOWN -> Assim como o any, aceita qualquer tipo de dado, a difereneça é que não deixa algo ser executado sem verificação de tipo, como uam trava de segurança.
function imprime(x: unknown): void {
    // dá erro: return console.log(x[0])
    if(Array.isArray(x)) {
        return console.log(x[0])
    } else {
        return console.log("basl")
    }
}

imprime([2 ,34 ])

// TIPO NEVER: Semelhante ao void, mas é quando a função não retorna nada, como um retorno de erro por exemplo: (OBS: VOID É MAIS USADO ANYWAY)
function showError(msg: string): never {
    throw new Error(msg)
}

//showError("blala")

// REST PARAMETERS: Mesma coisa que no JS, só que tipado
function somaTd(...n: number[]): void {
    return console.log(n)
}

somaTd([1, 2, 3, 45])

// DESTRUCTURING: Precisa falar o tipo de cada dado destruturado.
function showShirtDetails({name, price}: {name: string, price: number}): string {
    return `camisa tem nome ${name} e custah ${price}`;
}

const blusa = {name: "jiasjk", price: 23234}

console.log(showShirtDetails(blusa))

// OBJECT TYPES: São dados que tem tipo objeto, como object literals e arrays; interface, readonly e tupla e outros por exemplo que permitem os explorar.
// DE TIPO PARA INTERFACE: Um uso de caso de interface é simplificar os parâmetros de objeto de funções. Ao invés de passar um objeto longo, passa uma interface.
interface Product {
    name: string
    price: number
}
function falaProd(produto: Product): void {
    return console.log(produto.price)
}

const saia: Product = {
    name: "saia",
    price: 120
}

falaProd(saia)

// Propriedade opcionais em interfaces: adiciona interrogação, como nome?: string (DNV Q NEM NULLABLE DO C#)
interface Product2 {
    name: string
    price?: number
}
function falaProd2(produto: Product2): void {
    return console.log(produto.price)
}

const saia2: Product2 = {
    name: "saia",
}
falaProd2(saia2) // DÁ UNDEFINED

// PROPRIEDADES READONLY
interface Product3 {
    readonly name: string
    price?: number
}

const saia3: Product3 = {
    name: "saia",
}

// saia3.name = "anksa" -> DÁ ERRO

// INDEX SIGNATURE: Quando não sabemos o nome das chaves, mas já sabemos quais os tipos de um objeto ou array. Isso restringe a tipos que não devem ser utilizados.
interface CoordObj {
    [index: string]: number,
}
interface CoordObj2 {
    [index: string]: number,
}

const text: CoordObj = {
    234: 209
}
const text2: CoordObj2 = {
    iniminal: 209
}
console.log(typeof text2.iniminal)

// Extending Types: Como uma herança para criar tipos mais complexos de interface. Herda as propriedades e tipos já definidos de outras.
interface Human {
    name: string
}

interface SuperHuman extends Human {
    superPowers: string[]
}

const pessoinha: SuperHuman = {
    name:"alice",
    superPowers:["voar"]
}

console.log(pessoinha)

// INTERSECTION TYPES: São para criar tipos mais compleox a partir de duas interfaces
interface Gun {
    type: string,
    caliber: number
}

type HumanWithGun = Human & Gun;

const pessoinha2: HumanWithGun = {
    name:"alice",
    type: "223",
    caliber: 2343
}
console.log(pessoinha2)

// ReadonlyArrays: É um tipo para array, que deixa eles ReadOnly. A modificação de itens pode ser feita também através de método, mas não podemos aumentar o array, por exemplo.
let arrayzin: ReadonlyArray<number> = [21, 324 , 435, 35] // PRECISA BOTAR O <T>

// arrayzin[0] = 234; -> DÁ ERRO
// SÓ PODE MUDAR ATRAVÉS DE MÉTODOS
arrayzin.forEach(num => {
    console.log(num)
})

const ar2 = arrayzin.map(num => {
    return "num: " + num
})

// TUPLAS: Tipo de array, mas define a quantidade e tipo de elementos.
type numees = [number, number, number, string]

const meuNumees: numees = [1, 2 ,3,"bu"] 
meuNumees[0] = 3;
// const meuNumees: numees = [1, 2 ,3, 4] DÁ ERRO
// const meuNumees: numees = [1, "FEIJOADA" , 3] DÁ ERRO

// TUPLAS COM READONLY: 
function soLer(numeros: readonly [number, number]): void {
    return console.log(numeros[0], numeros[1])
}
soLer([1, 3])

// CRIAÇÃO DE TIPOS
// SOBRE GENERICS: UTILIZAMOS GENERICS QUANDO UMA FUNÇÃO PODE ACEITAR MAIS DE UM TIPO, MAIS INTERESSANTE QUE ANY, TEM EFEITO SEMELHANTE
// CONSTRAINTS EM GENERICS:
interface MyObject<T, U,    q> {
    name: string,
    wheels: T,
    engine: U,
    texti: Q
}

type Car = MyObject<string, string, number> 
const carrinhu: Car = {
    name:"Kim",
    wheels: "asd",
    engine: "243243",
    texti: 2234
}
console.log(carrinhu)

// TYPE PARAMETERS: Recurso de Generics, utilizado para dizer que algum parâmetro de uma função, por exemplo, é a chave de um objeto, que também é parâmetro. Assim, consegue-se criar uma ligação entre o tipo genérico e sua chave.
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return console.log(obj[key]);
}

const meuobji = {
    server: 123,
    gigas: 40
}

getSomeKey(meuobji, "gigas");

// keyof TYPE OPERATOR -> Aceita dados do tipo objeto
type Personagi = {name: string, age: number}

type C = keyof Personagi

function mostraKi(obj: Personagi, ki: C): void {
    return console.log(ki)
}

const lumd: Personagi = {
    name: "asdas",
    age: 23
}

mostraKi(lumd, "name")

// typeof Type Operator: 
const userName: string = "joanne";

const userName2: typeof userName = "lunna";

let userName3: typeof userName;
userName3 = "bribi"

// Indexed access types -> a diferença desse pro typeof é que esse você inputa a propriedade específica
type Truck = {km: number, name: string}

type Km = Truck["km"]

// Conditional expression type: if ternário
interface A {}
interface B {}

type LE = A extends B ? number : string;

interface Teste {
    showName(): string
}

type Teexti = Teste extends { showName(): number } ? boolean : string;

// Template Literals Type:
type Textia = "stringi"

type CustomType = `isso é uma ${Textia}`;

// ERRO const nunu: CustomType = `isso é uma stringi 2`;
const nunu: CustomType = `isso é uma stringi`;

type a1 = "Testando";
type a2 = "Union"

type a3 = `${a1}` | `${a2}`

// CLASSES
class Usere {
    name!: string
    age!: number
    // NÃO PODE, PRECISA INICIALIZAR C/ CONSTRUTCTOR SE N TIVER ! - nimbu: number 
}

const menina = new Usere()
menina.name = "sari"
// NÃO PODE: menina.job = "ka"

// Constructor
class MyClassei {
    name
    age
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const mariazinha = new MyClassei("Maria", 16) // SE TEM SÓ UM OU OUTRO Ñ ACEITA

// Campos readonly (ñ muda)
class MyClassi {
    name
    readonly age = 17
    
    constructor(name: string) {
        this.name = name;
      
    }
}

// Herança e super -> Usar extends; passar a propriedades da classe pai pra filha, usa super
class Barbie {
    model

    constructor(model: string) {
        this.model = model;
    }
}

class Acessory extends Barbie {
    name

    constructor(model: string, name: string) {
        super(model);
        this.name = name;
    }
}

const newAcessory = new Acessory("1242", "Hat")

// Métodos
class Barbie2 {
    model

    constructor(model: string) {
        this.model = model;
    }

    greeting(): void {
        return console.log("Hi, I'm barbie!")
    }
}

const barbie = new Barbie2("sirilanka")
barbie.greeting()

// Palavra this -> Se refere ao objeto em si, da mesma forma que no javascript
class Barbie3 {
    model

    constructor(model: string) {
        this.model = model;
    }

    greeting(): void {
        return console.log("Hi, I'm barbie! Model: "+ this.model)
    }
}

// GETTERS -> Forma de retornar propriedades do objeto, e podem as modificar no retorno.
class Barbie4 {
    model
    name

    constructor(model: string, name: string) {
        this.model = model;
        this.name = name;
    }

    get fullInfo() {
        return `Model: ${this.model}, Name: ${this.name}`;
    }
}

const novaBarbie = new Barbie4("12323", "barbiezinha")
console.log(novaBarbie.fullInfo)
// DÁ ERRO -> console.log(novaBarbie.fullInfo())

// SETTERS -> Os getters leem propriedades, os setters as modificam/atribuem (funcionam como métodos).
class Bratz {
    model!: string
    name!: string

    set inputModel(model: string) {
        this.model = model

        if (model === '0') {
            this.name = "Ivy"
        } else {
            this. name = "Gigi"
        }
    }

    get fullInfo() {
        return `Model: ${this.model}, Name: ${this.name}`;
    }
}

const novaBratz = new Bratz()
novaBratz.inputModel = "0"

// Herança de interfaces: Não só uma interface pode implementar uma interface, como uma classe também pode implementar uma interface; ideia é bem parecida com extends. Porém, essa forma é mais utilizada para criar os métodos que várias classes terão em comum.
interface NewFaceReality {
    firstContestant(): string
}

class Contestants implements NewFaceReality {
    contestants

    constructor(contestants: string[]) {
        this.contestants = contestants;
    }

    firstContestant() {
        return `Primeiro sobrevivente: ${this.contestants[0]}`;
    }
}

class Eliminatedskkk implements NewFaceReality {
    eliminatedskkk

    constructor(eliminatedskkk: string[]) {
        this.eliminatedskkk = eliminatedskkk;
    }

    firstContestant() {
        return `Primeiro sobrevivente: ${this.eliminatedskkk[0]}`;
    }
}

// Override de Métodos -> Utilizado para substituir um método de uma classe que herdamos, é so criar o mesmo método da classe pai na classe filha // OBS: É MAIS FÁCIL CRIAR OUTRO MÉTODO QUE ATENDA A NECESSIDADE, DEPENDENDO DA SITUAÇÃO
class Basi {
    metodoh() {
        return console.log("basih")
    }
}

class Filha extends Basi {
    metodoh() {
        return console.log("filhah")
    }
}

// Visibilidade -> Conceito de expor nossos métodos - Public: visibiliade default, pode ser acesso de qualquer lugar; protected: acessível apenas para a subclasses da classe do método, para acessar uma propriedade precisamos de um métodos/ private: apenas a classe que declarou o método pode utilizar.
// public:
class aw {
    public x = 2; // não muda nada
}

class arr extends aw {
}

const tt = new arr()
console.log(tt.x)

// protected:
class aw2 {
    protected x = 2; // só é acessada fora dela por método
    protected protectedMethod() {
        console.log("protegidoh")
    }
}

class arr2 extends aw2 {
    showX() {
        console.log("x: " + this.x)
    }

    showProtectedMethod() {
        this.protectedMethod();
    }
}

const tt2 = new arr2()
console.log(tt2.showX())
console.log(tt2.showProtectedMethod())

// Private
class Privateh {
    private imi = 3; // NENHUMA OUTRA CLASSE PODE O ACESSAR
    private protectedMethod() {
        console.log("protegidoh")
    }

    showProtectedProperty() {
        this.imi;
    }

    showProtectedMethod() {
        this.protectedMethod();
    }
}

const tt4 = new Privateh()

// NÃO PODE -> console.log(tt4.imi) 
console.log(tt4.showProtectedMethod())
console.log(tt4.showProtectedProperty())

// Static members: Faz com que o acesso ou utilização não dependam de objetos. É BASTANTE UTILIZADO EM CLASSES HELPERS
class StaticMember {
    static prop = "textand"
    static staticMethod() {
        console.log("métodoh static")
    }
}

console.log(StaticMember.prop)
StaticMember.staticMethod();

// Generic Class: Podemos criar classes com tipo genéricos também; ou seja, as propriedades dos argumentos podem ter os tipos definidos na hora da criação da instância, permitindo maior flexibilidade numa classe.

class Item<T, U> {
    first
    second

    constructor(first: T, second: U) {
        this.first = first,
        this. second = second
    }

    get showFirst() {
        return `First: ${this.first}`
    }
}

const novoItem = new Item("caixa", "surpresa")
const novoItem2 = new Item(345, false)

console.log(novoItem.first)
console.log(typeof novoItem.showFirst)

// Parameters properties -> Recurso para definir a privacidade, nome e tipo das propriedades no constructor; isso reduz um pouco a sintaxe das nossas classes
class SuzyDoll {
    constructor(public name: string, private price: number, private code: number) {
        this.name = name;
        this.code = code;
        this.price = price;
    }

    get showPrice() {
        return console.log(this.price)
    }

    get showCode() {
        return console.log(this.code)
    }
}

const bibica = new SuzyDoll("bibica", 50, 1245)

console.log(bibica.name)
bibica.showPrice;
bibica.showCode;

// Class Expressions -> Recurso para criar classes anônimas; Também pode utilizar generics junto com esse recurso, basicamente encapsula a classe numa variável. É uma variação que pode estar em algum software que você estiver dando manuntenção.

const myClass = class<T> {
    name

    constructor(name: string) {
        this.name = name;
    }
}

const testandoAnon = new myClass("anon");
console.log(testandoAnon.name)

// Abstract Class -> Recurso para servir de modelo para outra classe
// Todos os métodos dela devem ser implementados nas classes que a herdam, e também não podemos instanciar objetos a partir dessa classe.
abstract class AbstractClass {
    abstract showName(): void;
}

class AbstractExample extends AbstractClass {
    name;

    constructor(name: string) {
        super();
        this.name = name;
    }

    showName() {
        return console.log(this.name)
    }
}

// Relações entre classes (Questão de curiosidade, não fazer isso kkkk) -> Podemos criar um objeto com base em outra classe; Quando as classes são idênticas, o TS não reclama dessa ação; precisamos que as duas sejam exatamente iguais.
class Dogui {
    name!: string;
}

class Cati {
    name!: string;
}

const doguin: Dogui = new Cati(); // Pode

// MÓDULOS: OK

// DECORATORS -> Podem adicionar funcionalidades extras a classes e funções; basicamente, criamos novas funções, que são adicionadas a partir de um @nome; essa função será chamada assim que o item que foi definido o decorator for executado; para habilitar, precisamos adicionar uma configuração no tsconfig.json
// PRIME DECORACTOR -> VAMOS CRIAR UM DECORACTOR COM UMA FUNCTION; ELE PODE TRABALHAR COM ALGUNS ARGUMENTOS ESPECIAIS, QUE SÃO: TARGET, PROPERTYKEY E DESCRIPTOR. ELES NOS DÃO INFORMAÇÕES NO LOCAL QUE ELE FOI EXECUTADO.
// OBS: DESCOMENTAR O ""experimentalDecorators": true," NO TSCONFIG.JSON
// toda vez que o método for executado, o decorator vai ser ativado
// propertykey: define o objeto que o decorator tá atrelado; tarder = método que foi atrelado
function myDecorator() {
    console.log("Iniciando decorator!");

    return (
        (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
            console.log("Executando decorator!")
            console.log(target)
            console.log(propertyKey)
            console.log(descriptor)
    }
    )
}

class mysClass {
    @myDecorator() // cada um tem uma maneira de sser aplicado
    testing() {
        console.log("terminando execução do método")
    }
}

// Múltiplos Decorators -> O primeiro a ser executado é o que está mais ao topo do código.
function a() {
    return (
        // pra ser considerado decorator, precisa desses argumentos
        (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
            console.log("executou b.")
        }
    )
}

function b() {
    return (
        // pra ser considerado decorator, precisa desses argumentos
        (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
            console.log("executou b.")
        }
    )
}

class MultipleDecorators {
    @a()
    @b() // executa de cima pra baixo, primeiro b depois o a, o mais próximo da função
    testing() {
        console.log("Terminando execução")
    }
}

const multiple = new MultipleDecorators();
multiple.testing();

// Decorator de classe, que está ligado ao constructor, nos permite a adicionar algo a criação de classes
function classDec(constructor: Function) {
    console.log(constructor);

    if(constructor.name === "sari") {
        console.log("Criando usuário " + constructor.name + "...");
    }
}

@classDec
class Uss {
    name

    constructor(name: string) {
        this.name = name
    }
}

const sari = new User("sari")

// Decorator de método -> Podemos modificar a execução de métodos; podemos inserir o decorator antes da declaração do método (ele é executado antes do método).
function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}

class Machini {
    name

    constructor(name: string) {
        this.name = name
    }
    
    @enumerable(false)
    showName() {
        return `o nome da máquina é ${this.name}`
    }
}
const trator = new Machini("Trator")

// ACCESSOR DECORATOR -> Semelhante ao decorator de método, porém este serve apenas para os getters e setters, podemos alterar a execução antes de um set ou get
class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    
    @enumerable(true)
    get showName() {
        return `nome do monstro ${this.name}`
    };

    @enumerable(false)
    get showAge() {
        return `idade do monstro ${this.age}`
    }
}

const monstrinho = new Monster("chamander", 10)

// PROPERTY DECORATOR -> É utilizado nas propriedades de um classe, ou seja na hora da definição da mesma podemos ativar uma função (que é o decorator); isso nos ajuda a modificar ou validar algum valor.
// 1 - 000001 -> ids assim
function formatNumber() {
    return function(target: Object, propertyKey: string) {
        let value: string;

        // pode criar novas estruturas de getters e seters.

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        }) 
    }
}

class IDh {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newIte = new IDh("1")

// Exemplo real: Class Decorator
// função para inserir data de criação dos objetos
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
        
    }
}

@createdDate
class Pen {
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(12);
const newPen = new Pen(55);

console.log(newBook.createdAt)

// Exemplo real: Method Decorator
// verificar se um usuário pode ou não alterar o sistema
function checkIfUserPosted() {
    return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction)

        // verifica os argumentos que foram enviados na função
        descriptor.value = function(...args: any[]) {
            if(args[1] == true) {
                console.log("Usuário já postou!")
            } else {
                return childFunction.apply(this, args) // retorna a função naturalmente
            }
        }

        return descriptor
    }
}

class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`Post do usuário: ${content}`)
    }
}

const newPost = new Post()

newPost.post("Meu primeiro post!", newPost.alreadyPosted);

// Exemplo real -> Property Decorator
// Criar uma validação de número máximo de caracteres com decorators
function Max(limit: number) {
    return function(target: Object, propertyKey: string) {
        let value: string;

        const getter = function() {
            return value;
        }

        const setter = function(newVal: string) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} caracteres`)
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}

class Admin {
    @Max(10)
    username

    constructor(username: string) {
        this.username = username;
    }
}

let pedro = new Admin("12212332123231123231123123")