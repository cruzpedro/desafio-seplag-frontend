export class Movimento {
    constructor(
        public id: number,
        public data: Date,
        public local_origem: string,
        public local_destino: string,
        public usuario: string
    ) {}
}