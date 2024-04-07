import { driver } from './config';

async function queryEngineers() {
  const session = driver.session();
  try {
    const result = await session.run(
      'MATCH (n:Pessoa:Engenheiro) RETURN n.nome AS nome'
    );
    console.log(
      `Engenheiros na família: ${result.records
        .map((record) => record.get('nome'))
        .join(', ')}`
    );
  } finally {
    await session.close();
  }
}

async function queryChildrenOf(name: string) {
  const session = driver.session();
  try {
    const result = await session.run(
      'MATCH (p:Pessoa)-[:PAI_DE]->(c:Pessoa) WHERE p.nome = $name RETURN c.nome AS nome',
      { name }
    );
    console.log(
      `Filhos de ${name}: ${result.records
        .map((record) => record.get('nome'))
        .join(', ')}`
    );
  } finally {
    await session.close();
  }
}

async function queryPetOwner(petName: string) {
  const session = driver.session();
  try {
    const result = await session.run(
      'MATCH (p:Pessoa)-[:DONO_DE]->(pet:Pet) WHERE pet.nome = $petName RETURN p.nome AS nome',
      { petName }
    );
    console.log(
      `Dono do pet ${petName}: ${result.records
        .map((record) => record.get('nome'))
        .join(', ')}`
    );
  } finally {
    await session.close();
  }
}

(async () => {
  await queryEngineers();
  await queryChildrenOf('Leonardo');
  await queryPetOwner('Cacau');
  await driver.close();
})();
