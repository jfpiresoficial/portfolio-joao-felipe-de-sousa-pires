
# Entrega 1 — Modelo Conceitual (DER)
### Modelagem de um sistema de gestão de informações para uma organização de pequeno porte

## Metadados

- **Nomes dos alunos e RGM**

| Integrante | RGM |
|---|---:|
| Victor Augusto Silva Marcilio | 47190175 |
| João Felipe De Sousa Pires | 48165379 |
| Cauã Batista Freire | 48355127 |
| João Victor Gobi Romero | 48114642 |
| Guilherme Araujo De Oliveira | 47116862 |

## 1. Caracterização da Organização
*(vale 7,5% — Dimensão Conceitual)*

- **Nome e natureza da organização:** **Ótica Kadosh**, estabelecimento comercial de produtos ópticos situado na Av. Diogo da Costa Tavares, 125, Jardim Romano, São Paulo — SP, CEP 08191-000, numero para contato (11) 993494371.
- **Contexto e porte:** Foram identificadas três pessoas e funções na operação: **Guilherme de Souza Silva — optometrista; Marcos Vinícius Silva Menezes — gerente; Kaique Batista dos Santos — consultor óptico**. O número total de funcionários e o volume de atendimentos/vendas não foram informados. A ótica atende clientes presencialmente, trabalha com armações e lentes, recebe pagamentos, mantém estoque e solicita produtos a fornecedores quando necessário.
- **Problemas e necessidades identificados:** Pedidos e outras informações são mantidos em papel e planilhas. Segundo o relato da entrevista, um banco de dados usado anteriormente apresentava falhas frequentes. A necessidade concreta é relacionar atendimento, prescrição, pedido, pagamentos, compras, estoque e trocas sem depender de registros dispersos.
- **Justificativa da escolha:** A organização real reúne processos conectados e observáveis — atendimento, laudo/receita, venda, pagamento, compra, montagem, retirada, garantia e trocas — adequados a um DER conceitual de pequeno porte.
- **Evidências da organização:** Endereço informado acima; gerente entrevistado: Marcos Vinícius Silva Menezes. Há [fotografia do estabelecimento no repositório do grupo](https://github.com/jfpiresoficial/otica-kadosh-modelagem-dados/blob/main/Otica%20kadoshi.jpeg). O grupo também apresentou fotografias do formulário do pedido, do comprovante ao cliente e de um laudo produzido na ótica. Essas últimas imagens contêm dados pessoais e de saúde reais e não devem ser publicadas sem anonimização. **Data da visita/entrevista:** 05/09/2026. O acesso relatado foi presencial na unidade; um contato público da organização não foi confirmado para inclusão.

---

## 2. Processos de Negócio
*(vale 10% — Dimensão Procedimental)*

- **Principais processos mapeados:**
  1. **Atendimento e prescrição:** o cliente comparece à loja e é atendido por um funcionário. Uma receita trazida pelo cliente é aceita segundo a prática informada de até um ano; caso contrário, a ótica realiza teste e produz um laudo. A data da receita é anotada. O laudo fotografado tem medidas para longe/perto e olho direito/esquerdo; DNP e Altura aparecem no formulário do pedido e sua origem depende do atendimento.
  2. **Pedido e venda:** após conversar sobre as necessidades do cliente, o consultor registra armação e lente no formulário. Há via da ótica e comprovante resumido para o cliente. O formulário identifica consultor, cliente, datas, medidas, produtos, quantidades, preços por armação/par de lentes, total, sinal pago e saldo.
  3. **Pagamento e parcelas:** a ótica aceita Pix, dinheiro, débito e crédito, inclusive pagamento parcial ou parcelado. As parcelas são acompanhadas em planilha separada; seus cabeçalhos não foram fornecidos.
  4. **Estoque e fornecedores:** o pedido pode ser atendido só com produtos disponíveis. Se necessário, o gerente solicita lentes/armações a um ou mais fornecedores, anotando fornecedor/contato, produto, quantidade, custo, data do pedido e chegada. Entradas e saídas são registradas na planilha de estoque.
  5. **Montagem, retirada e garantia:** após receber ou separar os produtos, a ótica monta e finaliza os óculos e avisa o cliente. “Data da Retirada” foi explicada como retirada efetiva. A garantia relatada dura um ano contado da montagem/finalização.
  6. **Trocas e devoluções:** o pedido de papel registra data do ocorrido, possível cobrança e descrição do dano. Na substituição, a ótica usa estoque quando disponível ou pede ao fornecedor. Peças intactas podem ser reaproveitadas; as demais são descartadas. Valor e critérios da cobrança não foram detalhados.


---

## 3. Requisitos do Sistema
*(esta seção e a Seção 4 "Regras de Negócio" DIVIDEM 7,5% na dimensão conceitual — juntas valem 7,5%, não 7,5% cada — + 4% exclusivos desta seção na organização/documentação)*

### 3.1 Requisitos Funcionais

Os requisitos abaixo são **propostas para o sistema**, fundamentadas no processo relatado; não afirmam que essas funções já existam.

| ID | O sistema deve permitir... | Origem |
|---|---|---|
| RF-01 | Cadastrar e consultar os dados de cliente usados no pedido. | Formulário fotografado. |
| RF-02 | Registrar atendimento e associá-lo ao cliente e ao funcionário responsável. | Atendimento presencial e campo “Consultor”. |
| RF-03 | Registrar receita trazida ou laudo da ótica, data e medidas por olho e distância, mantendo DNP e Altura distintos. | Laudo, pedido e entrevista. |
| RF-04 | Conferir a data da receita trazida conforme a regra de um ano informada pela ótica. | Entrevista. |
| RF-05 | Registrar pedido com armação/lente, quantidades, preços, total, sinal e saldo. | Formulário e comprovante. |
| RF-06 | Registrar recebimentos parciais e acompanhar parcelas sem perder o vínculo com o pedido. | Entrevista e planilha relatada. |
| RF-07 | Registrar compra a fornecedor e seus itens, quantidades, custos, data de solicitação e chegada. | Entrevista. |
| RF-08 | Registrar entradas e saídas de estoque ligadas aos produtos. | Planilha de estoque relatada. |
| RF-09 | Registrar montagem/finalização, retirada e o prazo de garantia derivado da data de montagem. | Entrevista e formulário. |
| RF-10 | Registrar troca/devolução, dano, eventual cobrança e destino de peças reaproveitadas ou descartadas. | Entrevista e anotação no pedido. |

### 3.2 Requisitos Não Funcionais

| ID | Qualidade proposta | Justificativa |
|---|---|---|
| RNF-01 | Restringir acesso a dados pessoais e às medidas ópticas conforme a função do usuário. | Os documentos contêm CPF, contatos e dados de saúde. |
| RNF-02 | Manter cópias de segurança e permitir recuperação após falha. | A ótica relatou falhas no banco de dados anterior. |
| RNF-03 | Preservar a integridade entre pedido, itens, pagamentos, compras e movimentos de estoque. | Evita registros órfãos e saldos sem origem. |
| RNF-04 | Permitir consulta simples do histórico e do estado de um pedido. | Hoje as informações estão distribuídas em papel e planilhas. |
| RNF-05 | Registrar autoria e data de alterações relevantes. | Ajuda a conferir mudanças em valores, medidas e trocas. |

---

## 4. Regras de Negócio
*(esta seção DIVIDE com a Seção 3 "Requisitos do Sistema" os mesmos 7,5% da dimensão conceitual — juntas valem 7,5%, não 7,5% cada — + 4% exclusivos desta seção na documentação. "Regras de negócio" é o termo técnico usado em modelagem de dados para as regras de funcionamento de qualquer organização, com ou sem fins lucrativos)*

- **Regras operacionais:**

  | ID | Regra | Fundamento |
  |---|---|---|
  | RN-01 | Não há venda sem atendimento. | Relato da entrevista. |
  | RN-02 | Cada pedido utiliza sua própria receita; a mesma receita não é reutilizada em outro pedido. | Resposta do usuário. |
  | RN-03 | Receita trazida é conferida pela data segundo o prazo de um ano praticado pela ótica. | Relato da entrevista; não é afirmação de prazo legal geral. |
  | RN-04 | O pedido registra armação e lentes; os preços informados são por armação e por par de lentes. | Formulário e resposta do usuário. |
  | RN-05 | O pedido pode ser pago em partes e ter parcelas acompanhadas em planilha. | Entrevista e resposta do usuário. |
  | RN-06 | Um pedido pode não gerar compra ao fornecedor quando houver produto em estoque; se houver compras, cada uma atende um único pedido e um fornecedor. | Respostas do usuário. |
  | RN-07 | A garantia de um ano começa na montagem/finalização. | Resposta do usuário. |
  | RN-08 | Em troca/devolução, peças intactas podem ser reaproveitadas e as demais são descartadas. | Resposta do usuário. |

- **Restrições organizacionais:** O formulário mantém dados pessoais e medidas ópticas, portanto os exemplos publicados devem ser fictícios; os documentos fotografados com dados reais não são anexados ao trabalho. O valor ou critério de eventual cobrança por dano, os cabeçalhos das planilhas de parcelas/estoque e o modo de registrar DNP/Altura por olho ou por par permanecem sem confirmação. Identificadores técnicos e estados no modelo são propostas de sistema, não fatos sobre os papéis atuais.

---

## 5. Dicionário de Dados Conceitual (Preliminar)
O dicionário documenta entidades, atributos, descrições e regras identificadas na entrevista, no formulário do pedido e no laudo optométrico. Campos de organização técnica estão marcados como **Modelo**.

Esta versão do dicionário reúne **17 entidades e 90 atributos**. A correspondência com o DER do grupo deverá ser conferida depois que a imagem definitiva for inserida na Seção 7. A origem de cada regra distingue Formulário, Laudo, Relato e Modelo; uma fonte impressa não comprova que o campo seja sempre preenchido.

**Nota de terminologia:** DE, DC e AV seguem o [informe da Secretaria da Saúde do Ceará](https://www.saude.ce.gov.br/wp-content/uploads/sites/9/2018/06/ans_informe_ats_n01.pdf); DNP segue a [denominação da Prefeitura de São Borja](https://www.saoborja.rs.gov.br/images/conteudo/Licitacoes/2024/OTICAS_SANTA_TERESA_LTDA.pdf). Essas fontes explicam termos, sem comprovar os procedimentos da ótica.

O mesmo arquivo HTML pode ser acessado de duas formas:

1. [Código do dicionário em HTML](Dicionario_de_Dados_Otica_Kadosh_Preliminar.html)
2. [Visualização no GitHub Pages](https://jfpiresoficial.github.io/otica-kadosh-modelagem-dados/)

### CLIENTE

Pessoa identificada no formulário do pedido.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_cliente` | Código interno que distingue um cadastro de cliente dos demais no sistema proposto. | **Modelo:** Chave técnica proposta para ligar o cliente aos atendimentos; o formulário não apresenta esse código. |
| `nome` | Nome pelo qual o cliente é identificado no formulário de pedido. | **Formulário:** Refere-se ao cliente do pedido, não ao funcionário do campo ‘Consultor’; a obrigatoriedade do preenchimento não foi confirmada. |
| `data_nascimento` | Data de nascimento informada para a pessoa atendida. | **Formulário:** Corresponde ao campo ‘Data Nasc.’; o formulário não esclarece se deve ser preenchido em todos os pedidos. |
| `cpf` | Número de inscrição do cliente no Cadastro de Pessoas Físicas (CPF). | **Formulário:** Há um campo ‘CPF’ no pedido; o grupo não confirmou exigência de preenchimento, validação ou uso como identificador único. |
| `email` | Endereço eletrônico informado pelo cliente para contato. | **Formulário:** O campo ‘E-mail’ aparece no pedido; não há confirmação de que o cliente precise fornecê-lo. |
| `endereco` | Parte textual do endereço informada na linha ‘Endereço’ do pedido, como nome da via e complemento, se anotado. | **Formulário:** Não reunir neste atributo os campos impressos separadamente para bairro, CEP, número e cidade. |
| `bairro` | Nome do bairro indicado como parte do endereço do cliente. | **Formulário:** É registrado em campo próprio no pedido; seu preenchimento obrigatório não foi confirmado. |
| `cep` | Código de Endereçamento Postal (CEP) anotado para o endereço do cliente. | **Formulário:** Existe campo específico ‘CEP’; formato, conferência e obrigatoriedade não foram informados. |
| `numero_endereco` | Número do imóvel indicado na linha do endereço do cliente. | **Formulário:** Corresponde ao ‘Nº’ ao lado do CEP; não representa o número impresso do pedido. |
| `cidade` | Município informado no endereço do cliente. | **Formulário:** Há campo ‘Cidade’ no pedido; não foi confirmada regra para preenchimento ou padronização. |
| `telefone_fixo` | Número de telefone fixo informado como contato do cliente. | **Formulário:** O pedido separa ‘Tel. Fixo’ de ‘Tel. Celular’; não há exigência confirmada de informar ambos. |
| `telefone_celular` | Número de telefone celular informado como contato do cliente. | **Formulário:** O pedido possui campo próprio para celular; não foi confirmado se ele é sempre preenchido ou usado para avisar a retirada. |

**Observação:** Nenhum dado real visível nas fotos foi copiado para este dicionário.

### FUNCIONARIO

Pessoa que atende o cliente; o formulário identifica o responsável como “Consultor”.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_funcionario` | Código interno que distingue cada integrante da equipe no sistema proposto. | **Modelo:** Chave técnica proposta para associar o responsável aos atendimentos; não consta no formulário. |
| `nome` | Nome do integrante da equipe que pode ser associado ao atendimento. | **Formulário e relato:** O pedido identifica um ‘Consultor’ e a entrevista identificou profissionais da ótica; o nome do cliente pertence a CLIENTE. |
| `funcao` | Papel desempenhado pelo integrante da equipe na operação da ótica. | **Relato:** Foram informadas as funções optometrista, gerente e consultor óptico; outras funções não foram confirmadas. |

**Observação:** O vínculo com ATENDIMENTO indica o consultor responsável; não é necessário repetir seu nome em cada entidade.

### ATENDIMENTO

Ocorrência em que um funcionário atende um cliente na loja.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_atendimento` | Código interno de uma ocorrência de atendimento ao cliente no sistema proposto. | **Modelo:** Chave técnica proposta para ligar cliente, funcionário e eventual pedido; não está impressa no formulário. |
| `data_hora` | Data e horário em que o atendimento ao cliente ocorreu. | **Modelo:** Registro proposto; a ‘Data da Compra’ do pedido não comprova o horário nem substitui a data própria do atendimento. |
| `meio_contato` | Informação anotada no espaço ‘Meio de contato’ do formulário do pedido. | **Formulário:** O rótulo existe, mas a ótica não confirmou valores possíveis nem como usa o campo no atendimento. |
| `procedimento` | Caminho seguido para obter a prescrição usada no atendimento: receita apresentada ou teste realizado na ótica. | **Relato:** A receita trazida é conferida pelo prazo informado de até um ano; se não puder ser usada, foi relatado teste na ótica. |

**Observação:** O consultor responsável é representado pelo relacionamento com FUNCIONARIO; o cliente, pelo relacionamento com CLIENTE.

### RECEITA

Prescrição apresentada pelo cliente ou obtida no atendimento da ótica.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_receita` | Código interno que distingue a prescrição usada em um pedido no sistema proposto. | **Modelo:** Chave técnica proposta; o laudo fotografado não contém esse identificador. |
| `origem` | Indicação de onde veio a prescrição: apresentada pelo cliente ou produzida durante o atendimento na ótica. | **Relato:** Os dois caminhos foram relatados; o laudo fotografado é exemplo de documento produzido na ótica. |
| `data_receita` | Data registrada no laudo ou na receita apresentada pelo cliente. | **Laudo e relato:** A data é anotada e, quando a receita vem de fora, é usada na conferência do prazo relatado de até um ano. |
| `observacao_laudo` | Informação complementar escrita no espaço ‘Obs.’ do laudo optométrico. | **Laudo:** Registrar apenas quando houver anotação; não foi confirmada exigência de preencher o campo. |

**Observação:** A prescrição pode vir do cliente ou ser produzida na ótica. Cada pedido usa uma receita própria; se houver venda, a receita não é reutilizada em outra. As linhas por olho e longe/perto ficam em MEDIDA_RECEITA. DNP e Altura, observadas no pedido e não no laudo, ficam em MEDIDA_MONTAGEM.

### MEDIDA_RECEITA

Uma linha de prescrição identificada por olho e finalidade de longe ou perto.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_medida_receita` | Código interno que distingue as linhas de uma mesma receita. | **Modelo:** Chave técnica proposta; os documentos mostram linhas, mas não um código para cada uma. |
| `olho` | Lado da prescrição a que uma linha de medidas se refere: olho direito (O.D.) ou esquerdo (O.E.). | **Laudo e formulário:** Os documentos separam os dois olhos; medidas de um olho não devem ser atribuídas automaticamente ao outro. |
| `distancia` | Finalidade visual da linha de prescrição, indicada nos documentos como ‘Longe’ ou ‘Perto’. | **Laudo e formulário:** As seções são separadas; não foi confirmado que ambas sempre tenham valores preenchidos. |
| `de_laudo` | Valor de dioptria esférica (DE) anotado na linha do laudo optométrico. | **Laudo:** Deve ser associado ao olho e à seção de longe/perto da linha; a equivalência com ‘Esférico’ do pedido não foi validada com a ótica. |
| `dc_laudo` | Valor de dioptria cilíndrica (DC) anotado na linha do laudo optométrico. | **Laudo:** Deve ser associado ao olho e à seção de longe/perto da linha; a equivalência com ‘Cilíndrico’ do pedido não foi validada com a ótica. |
| `esferico_pedido` | Valor da coluna ‘Esférico’ na linha de prescrição do formulário de pedido. | **Formulário:** A anotação pertence ao olho e à seção de longe/perto correspondentes; não presumir equivalência confirmada com ‘DE’ do laudo. |
| `cilindrico_pedido` | Valor da coluna ‘Cilíndrico’ na linha de prescrição do formulário de pedido. | **Formulário:** A anotação pertence ao olho e à seção de longe/perto correspondentes; não presumir equivalência confirmada com ‘DC’ do laudo. |
| `eixo` | Valor angular anotado na coluna ‘Eixo’ da linha de prescrição. | **Laudo e formulário:** Conservar a associação com olho e longe/perto; não há evidência de valor em todas as linhas. |
| `av` | Valor de acuidade visual (AV) anotado na linha correspondente do laudo optométrico. | **Laudo:** A sigla aparece no laudo; a finalidade desse registro no processo da ótica não foi esclarecida na entrevista. |

**Observação:** Cada linha pertence a uma receita. Não se exige que todas as combinações de olho e longe/perto estejam preenchidas. A equivalência entre DE/DC do laudo e Esférico/Cilíndrico do pedido ainda não foi validada com a ótica.

### VENDA

Pedido comercial registrado após o atendimento, com via resumida entregue ao cliente.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_venda` | Código interno que identifica de forma inequívoca o pedido no sistema proposto. | **Modelo:** Chave técnica proposta porque a unicidade do número impresso no bloco de pedidos não foi confirmada. |
| `numero_pedido` | Número impresso no formulário que permite localizar o pedido em papel. | **Formulário:** A numeração é observada no papel, mas sequência e unicidade entre blocos não foram confirmadas; não a tratar como chave única sem validação. |
| `data_compra` | Data escrita no campo ‘Data da Compra’ do pedido comercial. | **Formulário:** Representa a data do pedido no formulário; não deve ser confundida com montagem, retirada efetiva ou pagamento. |
| `data_retirada` | Data em que o cliente efetivamente retirou os óculos finalizados. | **Formulário e relato:** O significado de retirada efetiva foi confirmado; não representa a data de montagem que inicia a garantia. |
| `horario_retirada` | Horário escrito após a expressão ‘A partir das’ no formulário. | **Formulário:** O papel traz esse horário, mas não foi confirmado se indica disponibilidade prevista ou momento efetivo da retirada. |
| `valor_total` | Valor total cobrado pelo conjunto de itens do pedido, antes de considerar o que já foi pago. | **Formulário e relato:** Corresponde a ‘Total: R$’ e ao ‘total do pedido’ esclarecido pelo usuário; não é o grau nem o valor da receita. |
| `valor_sinal_pago` | Quantia anotada no pedido como sinal ou montante já pago naquele registro. | **Formulário e relato:** O campo ‘Sinal/Pago’ convive com pagamentos parciais; não representa, por si só, todo o histórico de parcelas da planilha. |
| `valor_a_pagar` | Quantia restante indicada no campo ‘Valor a Pagar’ do pedido em papel. | **Formulário:** É o saldo anotado naquele momento; a atualização após parcelas, descontos ou ajustes não foi detalhada. |
| `data_montagem_finalizacao` | Data em que lente e armação foram montadas e os óculos ficaram finalizados. | **Relato:** Esse evento inicia o prazo de garantia de um ano informado pelo usuário, independentemente da data de retirada. |
| `fim_garantia` | Data de término obtida ao acrescentar um ano à data de montagem e finalização. | **Modelo e relato:** É cálculo proposto a partir da duração relatada; não há campo com essa data no formulário fotografado. |
| `status` | Etapa em que o pedido se encontra no acompanhamento pelo sistema proposto. | **Modelo:** Campo previsto no modelo; nomes e transições das etapas não foram confirmados com a ótica. |
| `observacao` | Texto livre anotado no campo ‘Obs.’ do pedido ou comprovante do cliente. | **Formulário:** O espaço existe nos documentos; conteúdo esperado e obrigatoriedade não foram esclarecidos. |

**Observação:** Cada venda decorre de um atendimento e utiliza uma receita ainda não usada em outra venda. Uma venda pode ser atendida pelo estoque, sem compra ao fornecedor. Número impresso, sinal e saldo são valores documentais; os recebimentos efetivos são registrados em PAGAMENTO.

### MEDIDA_MONTAGEM

Conjunto de medidas anotadas para ajustar as lentes ao pedido de óculos.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_medida_montagem` | Código interno que distingue um registro de medidas de montagem. | **Modelo:** Chave técnica proposta para permitir mais de um registro de medida no mesmo pedido. |
| `referencia_medida` | Indicação de a que parte do pedido o registro de DNP ou Altura se refere. | **Modelo:** Campo opcional proposto para futura identificação por olho, par ou outra referência; a granularidade real não foi confirmada. |
| `dnp` | Distância nasopupilar (DNP) registrada no formulário do pedido para a montagem das lentes. | **Formulário e relato:** É medida distinta de Altura; o modo de obter e registrar o valor por olho ou por par depende do atendimento e não foi esclarecido. |
| `altura` | Medida vertical anotada no campo ‘Altura’ do formulário para a montagem das lentes na armação. | **Formulário e relato:** É medida distinta da DNP; a origem do valor e seu registro por olho ou por par não foram esclarecidos. |

**Observação:** DNP e Altura permanecem campos distintos e ligados ao pedido, pois aparecem no formulário e não no laudo mostrado. Quantidade de registros, origem e identificação por olho/par dependem de validação.

### ITEM_VENDA

Armação ou lente incluída no pedido.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_item_venda` | Código interno de uma linha de armação ou de lente incluída no pedido. | **Modelo:** Chave técnica proposta para distinguir itens do mesmo pedido e vinculá-los ao produto correspondente. |
| `quantidade` | Número de unidades de armação ou de pares de lentes registrados na linha do pedido. | **Formulário:** A ficha separa ‘Qnt. Armação’ e ‘Qnt. de Lentes em Pares’; interpretar a unidade conforme a categoria do produto. |
| `preco_unitario` | Preço cobrado por uma armação ou por um par de lentes no pedido. | **Formulário e relato:** ‘Valor Armação’ e ‘Valor da Lente’ foram confirmados como preços por unidade/par; não confundir com o valor total do pedido. |
| `tipo_armacao` | Descrição do tipo de armação escolhido pelo cliente para este item. | **Formulário:** Corresponde a ‘Tipo de Armação’; aplica-se ao item de armação, não ao de lente. |
| `referencia_armacao` | Código ou referência comercial anotado para a armação escolhida no pedido. | **Formulário:** Corresponde a ‘Ref. Armação’; formato, preenchimento e unicidade não foram confirmados. |
| `observacao_lente` | Comentário específico sobre a lente escolhida para o pedido. | **Formulário:** Corresponde a ‘Obs. da Lente’; aplica-se ao item de lente e não substitui as medidas da receita. |

**Observação:** O produto de cada item é identificado pelo relacionamento com PRODUTO. A unidade de quantidade é armação individual ou par de lentes.

### PRODUTO

Referência de armação ou lente que pode ser vendida e/ou comprada.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_produto` | Código interno que distingue uma referência de armação ou lente no cadastro proposto. | **Modelo:** Chave técnica proposta para relacionar itens de venda, itens de compra e movimentos de estoque ao produto. |
| `categoria` | Tipo de produto representado pelo cadastro: armação ou lente. | **Relato:** A ótica informou venda separada apenas dessas duas categorias; serviços ou outros produtos não foram confirmados. |
| `referencia` | Código, modelo ou outra referência comercial que ajuda a reconhecer o produto. | **Formulário e Modelo:** O formulário mostra referência para armação; existência de referência equivalente para lentes no cadastro atual não foi confirmada. |
| `caracteristicas_lente` | Conjunto de características da lente selecionadas ou descritas no pedido, como opções impressas no formulário. | **Formulário:** Aplica-se a lentes; o formulário apresenta opções, mas combinações válidas, obrigatoriedade e registro em planilha não foram informados. |
| `marca` | Nome da marca associada à armação ou lente, se usado para identificá-la. | **Formulário e Modelo:** Há marcas e opções de lente no formulário; a existência de um cadastro geral de marcas na ótica não foi confirmada. |

**Observação:** Quantidade disponível não é tratada como fato isolado: no sistema proposto, o saldo é apurado pelas entradas e saídas de MOVIMENTO_ESTOQUE.

### PAGAMENTO

Recebimento de valor ligado a uma venda.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_pagamento` | Código interno que distingue um recebimento dos demais no sistema proposto. | **Modelo:** Chave técnica proposta para preservar vários pagamentos vinculados a um mesmo pedido. |
| `valor` | Quantia recebida do cliente em uma operação de pagamento específica. | **Formulário e relato:** Pagamentos parciais são aceitos; um recebimento individual não deve ser confundido com o total do pedido ou com todo o saldo pago. |
| `forma` | Meio pelo qual o cliente efetuou um recebimento específico. | **Relato:** Foram informados Pix, dinheiro, cartão de débito e cartão de crédito; parcelamento é tratado separadamente na planilha. |
| `data_pagamento` | Data em que o recebimento específico ocorreu. | **Modelo:** Registro proposto para acompanhar pagamentos parciais; não aparece como campo próprio no formulário fotografado. |

**Observação:** Registra dinheiro efetivamente recebido. Não há sinal obrigatório confirmado: uma venda pode existir antes do primeiro pagamento. Parcelas futuras ficam em PARCELA; alocações são proposta técnica para conciliação.

### PARCELA

Parte prevista do valor de uma venda parcelada, registrada separadamente pela ótica.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_parcela` | Código interno que distingue uma parcela das demais no sistema proposto. | **Modelo:** Chave técnica proposta para ligar a parcela à venda e, se houver, aos pagamentos alocados. |
| `numero_parcela` | Posição da parcela na sequência do acordo de pagamento. | **Relato:** O usuário confirmou registro do número em planilha; o título exato da coluna não foi mostrado. |
| `valor_previsto` | Quantia prevista para aquela parcela do pedido. | **Relato:** O valor da parcela é registrado em planilha; não equivale a recebimento efetivo. |
| `data_vencimento` | Data prevista para o pagamento da parcela. | **Relato:** O vencimento é registrado em planilha; regras de atraso e cobrança não foram detalhadas. |
| `data_pagamento_planilha` | Data anotada na planilha como pagamento da parcela. | **Relato:** O usuário confirmou esse registro; sua conciliação com os recebimentos de PAGAMENTO é proposta para o sistema. |

**Observação:** Uma venda pode não ser parcelada. As colunas número, valor, vencimento e pagamento foram relatadas, embora os cabeçalhos exatos da planilha não tenham sido enviados.

### ALOCACAO_PAGAMENTO

Parte de um pagamento efetivo associada a uma parcela prevista.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_alocacao` | Código interno que distingue cada associação entre pagamento e parcela. | **Modelo:** Chave técnica proposta; não foi mostrada como coluna da planilha atual. |
| `valor_alocado` | Parte do valor recebido usada para liquidar uma parcela específica. | **Modelo:** Permite conciliar recebimentos parciais; a soma alocada não deve superar o pagamento nem a parcela a liquidar. |

**Observação:** Entidade técnica proposta para permitir vários pagamentos de uma parcela ou um pagamento distribuído entre parcelas. As duas pontas devem pertencer à mesma venda.

### FORNECEDOR

Fornecedor de armações ou lentes solicitado pela ótica.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_fornecedor` | Código interno que distingue um fornecedor dos demais no cadastro proposto. | **Modelo:** Chave técnica proposta para ligar cada compra ao fornecedor escolhido, inclusive quando um pedido usa fornecedores distintos. |
| `nome` | Nome pelo qual o fornecedor de lentes ou armações é identificado pela ótica. | **Relato:** O usuário confirmou o registro do nome; não foram fornecidas regras de padronização ou identificação fiscal. |
| `contato` | Informação usada para falar com o fornecedor, como telefone ou canal de mensagens. | **Relato:** O contato é registrado e o gerente acompanha solicitações por mensagens ou ligações; formato do dado não foi confirmado. |

**Observação:** CNPJ e endereço do fornecedor não foram confirmados e não são apresentados como dados existentes.

### COMPRA

Solicitação de produtos a um fornecedor para um pedido de cliente.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_compra` | Código interno que distingue uma solicitação feita a fornecedor no sistema proposto. | **Modelo:** Chave técnica proposta; cada solicitação deve poder ser associada ao pedido de cliente e ao fornecedor correspondentes. |
| `data_pedido` | Data em que a ótica encaminhou a solicitação de produtos ao fornecedor. | **Relato:** É um dado confirmado da compra; não se confunde com a ‘Data da Compra’ registrada para o cliente em VENDA. |
| `data_chegada` | Data em que os itens solicitados foram recebidos na ótica. | **Relato:** É informada para acompanhar a compra; seu preenchimento antes da chegada não foi definido. |
| `status` | Situação de acompanhamento da solicitação ao fornecedor no sistema proposto. | **Modelo:** O gerente acompanha o pedido, mas os nomes de estados e a forma de registrá-los não foram confirmados. |

**Observação:** Cada compra se liga a um único fornecedor e a um pedido de cliente. Um pedido pode não exigir compra ou gerar compras para fornecedores distintos.

### ITEM_COMPRA

Produto e quantidade incluídos em uma solicitação ao fornecedor.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_item_compra` | Código interno que distingue uma linha de produto em uma solicitação ao fornecedor. | **Modelo:** Chave técnica proposta para separar produtos e quantidades de uma mesma compra. |
| `quantidade` | Número de unidades do produto solicitadas nesta linha da compra. | **Relato:** A quantidade é registrada; a unidade usada para cada categoria não foi detalhada na entrevista. |
| `custo` | Valor de aquisição informado para o produto nesta linha da solicitação. | **Relato:** O custo é registrado, mas não foi confirmado se o número representa valor por unidade ou total da linha; não calcular totais até esclarecer. |

**Observação:** Cada linha pertence a uma compra e identifica um produto. O custo foi confirmado, mas ainda não se sabe se o valor registrado é unitário ou total da linha; não foi renomeado para custo_unitario.

### TROCA_DEVOLUCAO

Ocorrência vinculada a um item vendido quando há troca ou devolução.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_ocorrencia` | Código interno que distingue cada caso de troca ou devolução no sistema proposto. | **Modelo:** Chave técnica proposta para ligar a ocorrência ao item vendido e a eventuais movimentos de estoque. |
| `data_ocorrido` | Data anotada para o fato que levou o cliente a solicitar troca ou devolução. | **Relato:** O usuário informou que a data do ocorrido é escrita no pedido de papel; não a confundir automaticamente com a data do registro. |
| `descricao_dano` | Relato do que quebrou ou foi danificado no produto apresentado pelo cliente. | **Relato:** A descrição é anotada no pedido de papel e ajuda a distinguir peça reaproveitável de peça descartada. |
| `multa_aplicada` | Indicação de que houve cobrança ao cliente relacionada à ocorrência. | **Relato:** Foi relatada cobrança em alguns danos, inclusive por imprudência; valor e critério de decisão não foram confirmados. |
| `tipo` | Classificação da ocorrência como troca ou devolução no sistema proposto. | **Modelo:** Serve para distinguir os dois processos; não foi observado campo impresso com esse nome no pedido. |

**Observação:** Uma ocorrência pode envolver um ou mais itens vendidos, possibilidade técnica proposta para não perder casos com peças diferentes. Peças intactas podem ser reaproveitadas e as demais descartadas; valor e critério da cobrança não foram confirmados.

### MOVIMENTO_ESTOQUE

Registro de entrada ou saída de produto/peça no controle de estoque.

| Atributo | Descrição | Regra de negócio associada |
|----------|-----------|------------------------------|
| `id_movimento` | Código interno que distingue uma entrada ou saída de produto/peça no sistema proposto. | **Modelo:** Chave técnica proposta para rastrear lançamentos separados do mesmo produto no estoque. |
| `data_movimento` | Data atribuída ao lançamento de entrada ou saída no controle de estoque. | **Relato e Modelo:** A ótica registra entradas e saídas em planilha; o nome exato dessa coluna e a diferença entre data do fato e do lançamento não foram informados. |
| `direcao` | Efeito do lançamento no saldo do produto: entrada ou saída. | **Relato e Modelo:** Entradas e saídas são registradas; a nomenclatura da planilha não foi enviada. |
| `motivo` | Contexto do movimento, como compra, venda, reaproveitamento ou descarte. | **Relato e Modelo:** As situações vêm do processo relatado; a classificação e os códigos do sistema são propostos. |
| `quantidade` | Número de unidades ou peças afetadas por um lançamento de estoque. | **Relato e Modelo:** A quantidade deve ser interpretada com o produto e o tipo de movimento; unidade e formato da planilha não foram informados. |

**Observação:** Cada lançamento pertence a um produto. A direção informa o efeito no saldo e o motivo explica a origem; o vínculo com compra, venda ou troca é opcional conforme o processo. O saldo é calculado a partir dos movimentos.

---

## 6. Modelagem Conceitual (Entidades, Atributos, Relacionamentos)
*(vale 7,5% na dimensão conceitual)*

- **Entidades e atributos:** A versão atual do dicionário reúne 17 entidades e 90 atributos, enumerados na Seção 5. O grupo ainda precisa conferir essa lista com o DER definitivo que será inserido na Seção 7. `id_*` identifica registros no sistema proposto; `numero_pedido` preserva o número do papel sem assumir unicidade. `fim_garantia` é derivado de `data_montagem_finalizacao` e da duração relatada de um ano.
- **Prescrição e montagem:** `RECEITA` guarda origem, data e observações; `MEDIDA_RECEITA` guarda linhas por olho e longe/perto. `MEDIDA_MONTAGEM` registra DNP e Altura como medidas distintas do pedido, sem fixar se sua referência é um olho ou um par antes de confirmação.
- **Operações comerciais:** `VENDA` decorre de `ATENDIMENTO`, usa uma receita própria, contém `ITEM_VENDA`, pode receber `PAGAMENTO` e pode ter `PARCELA`. Uma compra a fornecedor é opcional quando o estoque atende ao pedido; quando existe, `COMPRA` se vincula à venda, a um fornecedor e a um ou mais `ITEM_COMPRA`.
- **Estoque e trocas:** `PRODUTO` se relaciona com itens de venda, de compra e com `MOVIMENTO_ESTOQUE`. Cada movimento registra direção, motivo e quantidade; o saldo disponível é derivado das entradas e saídas. `TROCA_DEVOLUCAO` pode afetar itens vendidos e gerar movimentos de retorno, reaproveitamento ou descarte.
- **Integração e restrições:** `ALOCACAO_PAGAMENTO` é uma associação técnica para conciliar recebimentos e parcelas sem confundi-los. Uma alocação só pode unir pagamento e parcela da mesma venda; suas somas não podem superar os valores correspondentes. A receita usada na venda deve pertencer ao mesmo atendimento da venda. Essas verificações complementam as cardinalidades do DER.

---

## 7. Diagrama Entidade-Relacionamento (DER)
*(vale 20% — é o item de maior peso da entrega)*

**Imagem do DER do grupo pendente de inclusão.** Inserir aqui a versão definitiva do diagrama elaborada pelo grupo, em arquivo de imagem separado no mesmo repositório. Depois da inclusão, conferir entidades, atributos, relacionamentos e cardinalidades com as Seções 5, 6 e 8 e com o dicionário HTML.

---
## 8. Justificativa Técnica
*(vale 7,5% — sozinho, é o subcritério de maior peso dentro da Dimensão Conceitual)*

**Nota de revisão:** As decisões abaixo descrevem a versão atual do dicionário. O grupo deve conferir e ajustar esta justificativa após inserir o DER definitivo na Seção 7.

CLIENTE e FUNCIONARIO são separados de ATENDIMENTO para conservar o histórico quando um cliente retorna ou um profissional atende várias pessoas. Cada VENDA tem um ATENDIMENTO obrigatório; um atendimento pode terminar sem venda. O vínculo VENDA–RECEITA é obrigatório do lado da venda e limitado a uma venda do lado da receita, porque foi confirmado que cada pedido exige uma receita nova. A receita também pertence ao atendimento que a registrou; as duas ligações precisam apontar para o mesmo atendimento.

As linhas de prescrição por olho e por longe/perto aparecem repetidas no formulário e no laudo. Por isso ficam em MEDIDA_RECEITA, em vez de se transformar em colunas repetidas de RECEITA. DNP e Altura aparecem no pedido, não no laudo apresentado, e ficaram em MEDIDA_MONTAGEM. Essa entidade permite mais de um registro por pedido enquanto a ótica ainda não esclarece se anota medidas por olho, por par ou de outro modo.

ITEM_VENDA e ITEM_COMPRA separam as linhas comerciais dos cadastros de VENDA, COMPRA e PRODUTO. O preço de venda por armação ou par de lentes foi confirmado; o custo da compra não foi confirmado como unitário ou total e, por isso, permanece `custo`. Uma venda pode usar o estoque e gerar zero compras; quando pede lente e armação a fornecedores distintos, pode gerar compras diferentes, cada qual associada a um fornecedor.

PAGAMENTO representa recebimento efetivo e pode ocorrer várias vezes na mesma venda; o mínimo é zero porque não foi confirmado sinal obrigatório. PARCELA representa a obrigação prevista e preserva os dados relatados da planilha: número, valor, vencimento e data de pagamento anotada. ALOCACAO_PAGAMENTO é uma proposta para conciliar pagamentos parciais e parcelas, inclusive quando um recebimento cobre mais de uma obrigação. Os campos `valor_sinal_pago` e `valor_a_pagar` continuam como retratos do pedido em papel; o saldo corrente deve ser apurado pelos pagamentos.

MOVIMENTO_ESTOQUE registra separadamente direção e motivo. Assim, compras, vendas, trocas, reaproveitamento e descarte podem afetar o saldo sem transformar `quantidade_disponivel` em outro número independente. TROCA_DEVOLUCAO pode afetar mais de um item vendido como capacidade proposta, mas a quantidade real por ocorrência não foi confirmada. A cobrança por dano foi relatada, sem valor ou critério formal confirmado.

A garantia de um ano começa na montagem e finalização, não na retirada. `fim_garantia` é um valor derivado. Identificadores internos são propostas técnicas para integração futura; não foram apresentados como campos existentes nos papéis da ótica. Dados pessoais e ópticos não são exemplificados com valores reais no dicionário.

---

## 9. Uso de Inteligência Artificial
*(documentação do uso de IA na Entrega 1)*

Os registros abaixo foram redigidos a partir do relato do grupo. Os prompts estão resumidos com a redação revisada, preservando o sentido informado.

### Uso 1 — análise do material inicial

| Item | Registro do grupo |
|------|-------------------|
| **Ferramenta e etapa** | ChatGPT, usado para compreender o projeto, organizar o trabalho e preparar perguntas para o gerente da ótica. |
| **Motivação** | O grupo precisava entender por onde começar e como conduzir a pesquisa necessária à Entrega 1. |
| **Prompt(s) utilizados** | Em síntese: “Com base no Esqueleto da Entrega 1, atue como professor de modelagem de dados e sugira perguntas relevantes para fazer à ótica.” |
| **Resposta recebida** | A IA apresentou um roteiro com 40 perguntas sobre a rotina da ótica e orientou a organização inicial do trabalho. A partir dessa orientação, o grupo começou pelo DER. |
| **Fontes consultadas e verificadas** | [Pasta de materiais disponibilizada pelo professor](https://drive.google.com/drive/folders/1QVVdiG4LxFE7L3BSnZDFmHyakaoPX94A), conforme informado pelo grupo. |
| **Trechos rejeitados ou corrigidos** | Uma proposta anterior continha cerca de 120 perguntas; o grupo a reduziu para respeitar o tempo do gerente. Também descartou uma estrutura de README que não seguia o Esqueleto da Entrega 1. |
| **Justificativa da escolha final** | As 40 perguntas foram consideradas suficientes para investigar a rotina da ótica sem tornar a entrevista excessivamente longa. O README foi reorganizado conforme o esqueleto pedido. |
| **Reflexão crítica** | A IA ajudou a planejar a pesquisa, mas também sugeriu informações e uma estrutura que não correspondiam ao trabalho. O grupo precisou selecionar as perguntas e conferir o material antes de usá-lo. |

### Uso 2 — revisão do DER

| Item | Registro do grupo |
|------|-------------------|
| **Ferramenta e etapa** | ChatGPT (GPT-6 Sol) e Claude como apoio; brModelo para elaborar o DER. Segundo o grupo, Claude também auxiliou na conversão do PDF exportado para JPEG e na melhoria de sua legibilidade. |
| **Motivação** | Criar uma base para compreender o fluxo da ótica e, depois, desenhar e revisar o diagrama no brModelo. |
| **Prompt(s) utilizados** | Em síntese: “Com base nas respostas da entrevista, crie uma proposta de DER no estilo do brModelo”; depois, pedidos para ampliar os atributos e converter o PDF para JPEG com melhor qualidade. |
| **Resposta recebida** | Foi criada uma proposta inicial de DER, posteriormente ampliada com atributos e relações; também foi gerada uma versão da imagem em JPEG. |
| **Fontes consultadas e verificadas** | [Pasta de materiais disponibilizada pelo professor](https://drive.google.com/drive/folders/1QVVdiG4LxFE7L3BSnZDFmHyakaoPX94A), conforme informado pelo grupo. |
| **Trechos rejeitados ou corrigidos** | O primeiro DER era simples demais, e uma das propostas posteriores representava incorretamente informações já fornecidas. O grupo revisou o desenho no brModelo. |
| **Justificativa da escolha final** | A proposta inicial serviu como ponto de partida; o grupo a ampliou e corrigiu para representar melhor os dados e processos levantados. |
| **Reflexão crítica** | Os primeiros resultados não atenderam às expectativas do grupo. As revisões ajudaram a produzir uma versão mais próxima do que havia sido informado, mas o diagrama definitivo ainda precisa ser conferido com o dicionário. |

### Uso 3 — dicionário e README

| Item | Registro do grupo |
|------|-------------------|
| **Ferramenta e etapa** | ChatGPT (GPT-6 Sol), usado para criar uma base para o README. |
| **Motivação** | Organizar no GitHub o material já levantado para a Entrega 1. |
| **Prompt(s) utilizados** | Em síntese: “Com o DER e as respostas da entrevista, analise o Esqueleto da Entrega 1 e crie uma base para o README do GitHub.” |
| **Resposta recebida** | A IA forneceu uma estrutura inicial e o texto em Markdown para o README. |
| **Fontes consultadas e verificadas** | O grupo informou que não consultou fontes adicionais nesta etapa. |
| **Trechos rejeitados ou corrigidos** | Algumas frases foram reescritas porque não expressavam com clareza o que o grupo queria relatar. |
| **Justificativa da escolha final** | O README foi mantido como arquivo principal para apresentar e organizar o trabalho no repositório. |
| **Reflexão crítica** | Nessa etapa, a IA ajudou a estruturar o texto com mais precisão; mesmo assim, o grupo revisou as frases antes de aceitá-las. |

### Uso 4 — alinhamento do DER com o dicionário

| Item | Registro do grupo |
|------|-------------------|
| **Ferramenta e etapa** | ChatGPT (GPT-6 Sol), Codex e Claude, usados para comparar DER e dicionário. O grupo informou que o dicionário em HTML foi criado com auxílio do ChatGPT. |
| **Motivação** | Verificar se as informações do DER e do dicionário se complementavam e identificar diferenças entre os dois arquivos. |
| **Prompt(s) utilizados** | Em síntese: “Atue como especialista em modelagem de dados, analise os arquivos anexados, indique as divergências e crie um dicionário em HTML a partir do README e do DER.” |
| **Resposta recebida** | A análise apontou diferenças entre os arquivos, especialmente atributos ausentes no DER, e produziu uma versão do dicionário em HTML. |
| **Fontes consultadas e verificadas** | [Pasta de materiais disponibilizada pelo professor](https://drive.google.com/drive/folders/1QVVdiG4LxFE7L3BSnZDFmHyakaoPX94A), conforme informado pelo grupo. |
| **Trechos rejeitados ou corrigidos** | Segundo o grupo, foram acrescentados `ITEM_VENDA` e o registro de devolução, e foi retirada uma ligação direta entre RECEITA e CLIENTE. Essas alterações precisam ser conferidas na imagem definitiva do DER. |
| **Justificativa da escolha final** | A comparação mostrou que o dicionário descrevia elementos que não apareciam no desenho, permitindo ao grupo revisar os dois artefatos em conjunto. |
| **Reflexão crítica** | A IA tornou as divergências mais visíveis, mas a conferência final depende da leitura do DER do grupo e da verificação dos nomes e relações em ambos os arquivos. |

### Uso 5 — inclusão do DER do grupo no README

| Item | Registro do grupo |
|------|-------------------|
| **Ferramenta e etapa** | ChatGPT (GPT-6 Sol), Codex e Claude, consultados para orientar a apresentação do DER no README. |
| **Motivação** | O grupo teve dificuldade para inserir no README do GitHub a imagem exportada do diagrama. |
| **Prompt(s) utilizados** | Em síntese: “Atue como professor e me ajude a organizar a imagem do DER no README.” |
| **Resposta recebida** | A IA explicou o passo a passo e apresentou formas de organizar a imagem no repositório. |
| **Fontes consultadas e verificadas** | [Vídeo indicado pelo grupo sobre inserção de imagens no GitHub](https://youtu.be/9ygf4hkLVnA?si=iCP3OWCSNehCurkn). |
| **Trechos rejeitados ou corrigidos** | O grupo rejeitou a sugestão de manter a imagem em outro repositório. |
| **Justificativa da escolha final** | O grupo decidiu manter a imagem do DER no mesmo repositório do README para facilitar a organização e a visualização do trabalho. |
| **Reflexão crítica** | Entre as soluções sugeridas, a mais simples atendia à necessidade do grupo; a alternativa de usar repositórios diferentes acrescentava trabalho sem benefício para esta entrega. |

---

## Critérios Atitudinais (20%)
**Estes critérios NÃO constam explicitamente como item de entrega no README.** Eles são avaliados por meio de **Avaliação 360º entre os integrantes do grupo** (cada membro avalia os colegas de equipe) e, no caso da Colaboração, também pela **colaboração equilibrada no histórico de commits** do repositório GitHub — não pela leitura do restante do repositório nem pela apresentação:

- **Participação (5%):** envolvimento nas discussões técnicas e nas decisões do grupo.
- **Comprometimento (5%):** cumprimento de prazos e responsabilidades assumidas.
- **Colaboração (5%):** respeito às contribuições dos colegas, cooperação na construção do projeto e colaboração equilibrada no histórico de commits do repositório GitHub.
- **Autonomia (5%):** busca independente de soluções e proposta de melhorias.

---

## Resumo dos Pesos

| Dimensão | Peso total |
|----------|-----------|
| Conceitual (contexto, requisitos/regras, modelagem, justificativa técnica) | 30% |
| Procedimental (requisitos, fluxogramas, dicionário de dados, DER) | 50% |
| Atitudinal (participação, comprometimento, colaboração, autonomia) | 20% |

**Entrega final:** README.md completo + DER + Dicionário de Dados em HTML (com exceção dos cursos GTI) anexado no repositório GitHub do grupo.
