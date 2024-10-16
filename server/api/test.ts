class Project {
    constructor(
        public id: number,
        public projectName: string,
        public address: string,
        public type: string,
        public contactName: string,
        public contactEmail: string,
    ) {}
}

export default defineEventHandler(async (_) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return [
        new Project(
            1,
            'Testprojekt 1',
            'Teststraße 1, 12345 Testhausen',
            'Testtype',
            'No Name',
            'no.name@test.com',
        )
    ];
});
