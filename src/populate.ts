import { driver } from './config';

(async () => {
  try {
    const session = driver.session();
    const result = await session.run(
      `
        // Pessoas
        CREATE (p1:Pessoa:Engenheiro {nome: "Leonardo", sexo: "Masculino", idade: 48})
        CREATE (p2:Pessoa:Professor {nome: "Karyna", sexo: "Feminino", idade: 52})
        CREATE (p3:Pessoa:Desenvolvedor {nome: "Leonardo Jr", sexo: "Masculino", idade: 20})
        CREATE (p4:Pessoa:Estudante {nome: "Ana Carolina", sexo: "Feminino", idade: 21})
        CREATE (p5:Pessoa:Engenheiro {nome: "Dovanir", sexo: "Masculino", idade: 81})
        CREATE (p6:Pessoa:Professor {nome: "Nirvana", sexo: "Feminino", idade: 78})
        CREATE (p7:Pessoa:Engenheiro {nome: "Dovanir Jr", sexo: "Masculino", idade: 42})
        CREATE (p8:Pessoa:Empresaria {nome: "Cinthia", sexo: "Feminino", idade: 54})

        // Pets
        CREATE (pet1:Pet:Cachorro {nome: "Cacau", especie: "Cachorro", idade: 2})
        CREATE (pet2:Pet:Gato {nome: "Serafina", especie: "Gato", idade: 12})

        // Relacionamentos
        CREATE (p1)-[:CASADO_COM {desde: 2000}]->(p2)
        CREATE (p5)-[:CASADO_COM {desde: 1972}]->(p6)
        CREATE (p2)-[:PAI_DE]->(p3)
        CREATE (p2)-[:PAI_DE]->(p4)
        CREATE (p1)-[:PAI_DE]->(p3)
        CREATE (p1)-[:PAI_DE]->(p4)
        CREATE (p5)-[:PAI_DE]->(p2)
        CREATE (p5)-[:PAI_DE]->(p8)
        CREATE (p5)-[:PAI_DE]->(p7)
        CREATE (p6)-[:PAI_DE]->(p2)
        CREATE (p6)-[:PAI_DE]->(p8)
        CREATE (p6)-[:PAI_DE]->(p7)
        CREATE (p3)-[:IRMAO_DE]->(p4)
        CREATE (p4)-[:IRMAO_DE]->(p3)
        CREATE (p7)-[:IRMAO_DE]->(p8)
        CREATE (p7)-[:IRMAO_DE]->(p2)
        CREATE (p8)-[:IRMAO_DE]->(p7)
        CREATE (p8)-[:IRMAO_DE]->(p2)
        CREATE (p2)-[:IRMAO_DE]->(p7)
        CREATE (p2)-[:IRMAO_DE]->(p8)
        CREATE (p4)-[:DONO_DE]->(pet1)
        CREATE (p8)-[:DONO_DE]->(pet2)
      `
    );
    console.log('Grafo da família criado com sucesso.');
  } catch (err) {
    console.error('Erro ao criar o grafo da família:', err);
  } finally {
    driver.close();
  }
})();
