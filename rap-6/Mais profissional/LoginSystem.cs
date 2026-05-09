using System;

namespace RapNacionalSite
{
    class LoginSystem
    {
        static void Main(string[] args)
        {
            string loginCorreto = "adm";
            string senhaCorreta = "1234";
            int tentativas = 3;

            Console.WriteLine("--- Sistema de Acesso Administrativo ---");

            for (int i = 0; i < tentativas; i++)
            {
                Console.Write("Digite o usuário: ");
                string usuario = Console.ReadLine();

                Console.Write("Digite a senha: ");
                string senha = Console.ReadLine();

                if (usuario == loginCorreto && senha == senhaCorreta)
                {
                    Console.WriteLine("Bem-vindo, " + usuario + "! Acesso concedido.");
                    // Lógica para carregar o painel administrativo
                    return;
                }
                else
                {
                    Console.WriteLine("Acesso negado. Tentativas restantes: " + (tentativas - 1 - i));
                }
            }

            Console.WriteLine("Conta bloqueada por excesso de tentativas.");
        }
    }
}
