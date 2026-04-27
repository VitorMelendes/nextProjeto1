"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Page() {
  const [data, setData] = useState<User[]>([
    { id: 1, name: "João Silva", email: "joao@email.com" },
    { id: 2, name: "Maria Souza", email: "maria@email.com" },
    { id: 3, name: "Carlos Lima", email: "carlos@email.com" },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  // DELETE
  function handleDelete(id: number) {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir?");
    if (!confirmDelete) return;

    setData((prev) => prev.filter((user) => user.id !== id));
  }

  // EDIT
  function handleEdit(user: User) {
    setEditingId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  }

  // SAVE
  function handleSave(id: number) {
    setData((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, name: editName, email: editEmail }
          : user
      )
    );

    handleCancel();
  }

  // CANCEL
  function handleCancel() {
    setEditingId(null);
    setEditName("");
    setEditEmail("");
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
          Tabela de Usuários
        </h2>

        <table className="w-full border-collapse text-gray-700">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Nome</th>
              <th className="p-2">Email</th>
              <th className="p-2 text-center">Ações</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                {/* NOME */}
                <td className="p-2">
                  {editingId === user.id ? (
                    <input
                      className="border p-1 rounded w-full"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    user.name
                  )}
                </td>

                {/* EMAIL */}
                <td className="p-2">
                  {editingId === user.id ? (
                    <input
                      className="border p-1 rounded w-full"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                    />
                  ) : (
                    user.email
                  )}
                </td>

                {/* AÇÕES */}
                <td className="p-2 flex gap-2 justify-center">
                  {editingId === user.id ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleSave(user.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Salvar
                      </button>

                      <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleEdit(user)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Editar
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            Nenhum usuário encontrado
          </p>
        )}
      </div>
    </div>
  );
}