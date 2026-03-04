import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Avatar, AvatarFallback } from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Search,
  UserCheck,
  Phone,
  Mail,
  Star,
  Filter,
  Plus,
  X,
  CheckCircle,
  Clock,
  BarChart3,
  Edit,
  Trash2,
  XCircle,
  Save,
  AlertCircle,
} from "lucide-react";

// Данные записей
const initialBookings = [
  {
    id: 1,
    client: "Иван Иванов",
    clientPhone: "+7 (999) 111-11-11",
    trainer: "Алексей Петров",
    type: "Персональная",
    date: "28 фев 2026",
    time: "10:00",
    status: "confirmed",
    amount: 2500,
  },
  {
    id: 2,
    client: "Мария Петрова",
    clientPhone: "+7 (999) 222-22-22",
    trainer: "Елена Смирнова",
    type: "Групповая",
    date: "28 фев 2026",
    time: "18:00",
    status: "confirmed",
    amount: 800,
  },
  {
    id: 3,
    client: "Дмитрий Козлов",
    clientPhone: "+7 (999) 333-33-33",
    trainer: "Алексей Петров",
    type: "Персональная",
    date: "1 мар 2026",
    time: "14:00",
    status: "pending",
    amount: 2500,
  },
  {
    id: 4,
    client: "Анна Смирнова",
    clientPhone: "+7 (999) 444-44-44",
    trainer: "Мария Иванова",
    type: "Групповая",
    date: "1 мар 2026",
    time: "19:00",
    status: "confirmed",
    amount: 800,
  },
  {
    id: 5,
    client: "Петр Сидоров",
    clientPhone: "+7 (999) 555-55-55",
    trainer: "Дмитрий Козлов",
    type: "Персональная",
    date: "2 мар 2026",
    time: "16:00",
    status: "confirmed",
    amount: 2500,
  },
  {
    id: 6,
    client: "Ольга Васильева",
    clientPhone: "+7 (999) 666-66-66",
    trainer: "Елена Смирнова",
    type: "Групповая",
    date: "3 мар 2026",
    time: "20:00",
    status: "pending",
    amount: 800,
  },
];

// Данные клиентов
const initialClients = [
  {
    id: 1,
    name: "Иван Иванов",
    email: "ivanov@mail.com",
    phone: "+7 (999) 111-11-11",
    sessions: 28,
    lastVisit: "Сегодня",
    status: "active",
    registered: "15 янв 2026",
    balance: 12,
  },
  {
    id: 2,
    name: "Мария Петрова",
    email: "petrova@mail.com",
    phone: "+7 (999) 222-22-22",
    sessions: 15,
    lastVisit: "Вчера",
    status: "active",
    registered: "3 фев 2026",
    balance: 8,
  },
  {
    id: 3,
    name: "Дмитрий Козлов",
    email: "kozlov@mail.com",
    phone: "+7 (999) 333-33-33",
    sessions: 12,
    lastVisit: "2 дня назад",
    status: "active",
    registered: "10 фев 2026",
    balance: 5,
  },
  {
    id: 4,
    name: "Анна Смирнова",
    email: "smirnova@mail.com",
    phone: "+7 (999) 444-44-44",
    sessions: 8,
    lastVisit: "3 дня назад",
    status: "active",
    registered: "20 фев 2026",
    balance: 10,
  },
  {
    id: 5,
    name: "Петр Сидоров",
    email: "sidorov@mail.com",
    phone: "+7 (999) 555-55-55",
    sessions: 5,
    lastVisit: "1 неделю назад",
    status: "inactive",
    registered: "1 янв 2026",
    balance: 2,
  },
];

// Данные тренеров
const initialTrainers = [
  {
    id: 1,
    name: "Алексей Петров",
    specialization: "Силовые тренировки",
    email: "a.petrov@fitnessclub.ru",
    phone: "+7 (999) 123-45-67",
    clients: 42,
    sessionsToday: 5,
    sessionsWeek: 28,
    rating: 4.9,
    reviews: 127,
    experience: "8 лет",
    status: "active",
  },
  {
    id: 2,
    name: "Мария Иванова",
    specialization: "Йога и растяжка",
    email: "m.ivanova@fitnessclub.ru",
    phone: "+7 (999) 234-56-78",
    clients: 38,
    sessionsToday: 4,
    sessionsWeek: 25,
    rating: 4.8,
    reviews: 95,
    experience: "5 лет",
    status: "active",
  },
  {
    id: 3,
    name: "Дмитрий Козлов",
    specialization: "Функциональный тренинг",
    email: "d.kozlov@fitnessclub.ru",
    phone: "+7 (999) 345-67-89",
    clients: 35,
    sessionsToday: 6,
    sessionsWeek: 30,
    rating: 4.9,
    reviews: 112,
    experience: "6 лет",
    status: "active",
  },
  {
    id: 4,
    name: "Елена Смирнова",
    specialization: "Пилатес",
    email: "e.smirnova@fitnessclub.ru",
    phone: "+7 (999) 456-78-90",
    clients: 30,
    sessionsToday: 3,
    sessionsWeek: 22,
    rating: 5.0,
    reviews: 89,
    experience: "7 лет",
    status: "active",
  },
];

export default function App() {
  const [bookings, setBookings] = useState(initialBookings);
  const [clients, setClients] = useState(initialClients);
  const [trainers, setTrainers] = useState(initialTrainers);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Диалоги
  const [addBookingOpen, setAddBookingOpen] = useState(false);
  const [addClientOpen, setAddClientOpen] = useState(false);
  const [addTrainerOpen, setAddTrainerOpen] = useState(false);
  const [editClientOpen, setEditClientOpen] = useState(false);
  const [editTrainerOpen, setEditTrainerOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<typeof initialClients[0] | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState<typeof initialTrainers[0] | null>(null);

  // Формы
  const [newBookingData, setNewBookingData] = useState({
    client: "",
    clientPhone: "",
    trainer: "",
    type: "Персональная",
    date: "",
    time: "",
  });

  const [newClientData, setNewClientData] = useState({
    name: "",
    email: "",
    phone: "",
    balance: 0,
  });

  const [newTrainerData, setNewTrainerData] = useState({
    name: "",
    specialization: "",
    email: "",
    phone: "",
    experience: "",
  });

  // Фильтрация записей
  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.trainer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Фильтрация клиентов
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm)
  );

  // Подтвердить запись
  const confirmBooking = (id: number) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status: "confirmed" } : b)));
    toast.success("Запись подтверждена!", {
      description: "Клиент получит уведомление",
    });
  };

  // Отменить запись
  const cancelBooking = (id: number) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status: "cancelled" } : b)));
    toast.error("Запись отменена", {
      description: "Клиент получит уведомление об отмене",
    });
  };

  // Удалить запись
  const deleteBooking = (id: number) => {
    setBookings(bookings.filter((b) => b.id !== id));
    toast.success("Запись удалена");
  };

  // Добавить запись
  const addBooking = () => {
    if (!newBookingData.client || !newBookingData.trainer || !newBookingData.date || !newBookingData.time) {
      toast.error("Заполните все обязательные поля");
      return;
    }

    const newBooking = {
      id: Math.max(...bookings.map((b) => b.id)) + 1,
      ...newBookingData,
      status: "pending",
      amount: newBookingData.type === "Персональная" ? 2500 : 800,
    };

    setBookings([...bookings, newBooking]);
    setAddBookingOpen(false);
    setNewBookingData({
      client: "",
      clientPhone: "",
      trainer: "",
      type: "Персональная",
      date: "",
      time: "",
    });
    toast.success("Запись создана!", {
      description: "Новая тренировка добавлена в расписание",
    });
  };

  // Добавить клиента
  const addClient = () => {
    if (!newClientData.name || !newClientData.email || !newClientData.phone) {
      toast.error("Заполните все обязательные поля");
      return;
    }

    const newClient = {
      id: Math.max(...clients.map((c) => c.id)) + 1,
      ...newClientData,
      sessions: 0,
      lastVisit: "Никогда",
      status: "active",
      registered: new Date().toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    setClients([...clients, newClient]);
    setAddClientOpen(false);
    setNewClientData({
      name: "",
      email: "",
      phone: "",
      balance: 0,
    });
    toast.success("Клиент добавлен!", {
      description: `${newClient.name} успешно зарегистрирован`,
    });
  };

  // Добавить тренера
  const addTrainer = () => {
    if (!newTrainerData.name || !newTrainerData.email || !newTrainerData.phone || !newTrainerData.specialization) {
      toast.error("Заполните все обязательные поля");
      return;
    }

    const newTrainer = {
      id: Math.max(...trainers.map((t) => t.id)) + 1,
      ...newTrainerData,
      clients: 0,
      sessionsToday: 0,
      sessionsWeek: 0,
      rating: 5.0,
      reviews: 0,
      status: "active",
    };

    setTrainers([...trainers, newTrainer]);
    setAddTrainerOpen(false);
    setNewTrainerData({
      name: "",
      specialization: "",
      email: "",
      phone: "",
      experience: "",
    });
    toast.success("Тренер добавлен!", {
      description: `${newTrainer.name} добавлен в команду`,
    });
  };

  // Удалить клиента
  const deleteClient = (id: number) => {
    setClients(clients.filter((c) => c.id !== id));
    toast.success("Клиент удален");
  };

  // Пополнить баланс клиента
  const addBalance = (id: number, amount: number) => {
    setClients(
      clients.map((c) =>
        c.id === id ? { ...c, balance: c.balance + amount } : c
      )
    );
    toast.success(`Баланс пополнен на ${amount} занятий`);
  };

  // Удалить тренера
  const deleteTrainer = (id: number) => {
    setTrainers(trainers.filter((t) => t.id !== id));
    toast.success("Тренер удален");
  };

  // Статистика
  const stats = {
    totalClients: clients.length,
    activeClients: clients.filter((c) => c.status === "active").length,
    newClientsWeek: clients.filter((c) => c.registered.includes("фев")).length,
    bookingsToday: bookings.filter((b) => b.date.includes("28 фев")).length,
    pendingBookings: bookings.filter((b) => b.status === "pending").length,
    personalToday: bookings.filter((b) => b.date.includes("28 фев") && b.type === "Персональная").length,
    revenueMonth: bookings.reduce((sum, b) => sum + (b.status !== "cancelled" ? b.amount : 0), 0),
    activeTrainers: trainers.filter((t) => t.status === "active").length,
    workingToday: trainers.filter((t) => t.sessionsToday > 0).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster position="top-right" richColors />

      {/* Шапка */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Панель управления
              </h1>
              <p className="text-gray-600 mt-1">Fitness Club • Управление клубом</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <p className="text-sm text-gray-600">Администратор</p>
                <p className="font-semibold">admin@fitnessclub.ru</p>
              </div>
              <Avatar className="w-12 h-12 border-2 border-blue-500">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  А
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm mb-1">Всего клиентов</p>
                  <p className="text-4xl font-bold">{stats.totalClients}</p>
                  <p className="text-blue-100 text-sm mt-2">
                    ✓ {stats.activeClients} активных
                  </p>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm mb-1">Записей сегодня</p>
                  <p className="text-4xl font-bold">{stats.bookingsToday}</p>
                  <p className="text-green-100 text-sm mt-2">
                    ⏳ {stats.pendingBookings} ожидают
                  </p>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm mb-1">Выручка за месяц</p>
                  <p className="text-4xl font-bold">{(stats.revenueMonth / 1000).toFixed(1)}K ₽</p>
                  <p className="text-purple-100 text-sm mt-2">📈 +18% к прошлому</p>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <DollarSign className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm mb-1">Активных тренеров</p>
                  <p className="text-4xl font-bold">{stats.activeTrainers}</p>
                  <p className="text-orange-100 text-sm mt-2">
                    💪 {stats.workingToday} работают сейчас
                  </p>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <UserCheck className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Вкладки */}
        <Card className="shadow-lg">
          <CardHeader className="border-b">
            <CardTitle className="text-2xl">Управление</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="bookings">
              <TabsList className="mb-6 w-full grid grid-cols-3 h-auto md:h-12 gap-2 md:gap-0 bg-transparent md:bg-muted p-0 md:p-1">
                <TabsTrigger 
                  value="bookings" 
                  className="flex-col md:flex-row gap-1 md:gap-2 py-3 md:py-2 text-xs md:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  <Calendar className="w-4 h-4 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Записи</span>
                  <span className="sm:hidden">Записи</span>
                  <Badge className="ml-1 bg-white/20 text-white hidden md:inline-flex">{bookings.length}</Badge>
                </TabsTrigger>
                <TabsTrigger 
                  value="clients" 
                  className="flex-col md:flex-row gap-1 md:gap-2 py-3 md:py-2 text-xs md:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  <Users className="w-4 h-4 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Клиенты</span>
                  <span className="sm:hidden">Клиенты</span>
                  <Badge className="ml-1 bg-white/20 text-white hidden md:inline-flex">{clients.length}</Badge>
                </TabsTrigger>
                <TabsTrigger 
                  value="trainers" 
                  className="flex-col md:flex-row gap-1 md:gap-2 py-3 md:py-2 text-xs md:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  <UserCheck className="w-4 h-4 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Тренеры</span>
                  <span className="sm:hidden">Тренеры</span>
                  <Badge className="ml-1 bg-white/20 text-white hidden md:inline-flex">{trainers.length}</Badge>
                </TabsTrigger>
              </TabsList>

              {/* Вкладка Записи */}
              <TabsContent value="bookings">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="relative flex-1 w-full">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Поиск по клиенту или тренеру..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full sm:w-[200px]">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Статус" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все записи</SelectItem>
                        <SelectItem value="confirmed">Подтверждённые</SelectItem>
                        <SelectItem value="pending">Ожидающие</SelectItem>
                        <SelectItem value="cancelled">Отменённые</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button onClick={() => setAddBookingOpen(true)} className="w-full sm:w-auto">
                      <Plus className="w-4 h-4 mr-2" />
                      Добавить запись
                    </Button>
                  </div>

                  {/* Мобильная версия - карточки */}
                  <div className="block md:hidden space-y-3">
                    {filteredBookings.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        Записи не найдены
                      </div>
                    ) : (
                      filteredBookings.map((booking) => (
                        <Card key={booking.id} className="hover:shadow-md transition-all">
                          <CardContent className="pt-4">
                            <div className="space-y-3">
                              <div className="flex items-start justify-between">
                                <div>
                                  <div className="font-bold text-lg">{booking.client}</div>
                                  <div className="text-sm text-gray-600">{booking.clientPhone}</div>
                                </div>
                                {booking.status === "confirmed" && (
                                  <Badge className="bg-green-100 text-green-800">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Подтверждена
                                  </Badge>
                                )}
                                {booking.status === "pending" && (
                                  <Badge className="bg-yellow-100 text-yellow-800">
                                    <Clock className="w-3 h-3 mr-1" />
                                    Ожидает
                                  </Badge>
                                )}
                                {booking.status === "cancelled" && (
                                  <Badge className="bg-red-100 text-red-800">
                                    <XCircle className="w-3 h-3 mr-1" />
                                    Отменена
                                  </Badge>
                                )}
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <span className="text-gray-600">Тренер:</span>
                                  <div className="font-medium">{booking.trainer}</div>
                                </div>
                                <div>
                                  <span className="text-gray-600">Тип:</span>
                                  <div className="font-medium">{booking.type}</div>
                                </div>
                                <div>
                                  <span className="text-gray-600">Дата:</span>
                                  <div className="font-medium">{booking.date}</div>
                                </div>
                                <div>
                                  <span className="text-gray-600">Время:</span>
                                  <div className="font-medium flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {booking.time}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center justify-between pt-2 border-t">
                                <div className="text-lg font-bold text-blue-600">{booking.amount} ₽</div>
                                <div className="flex gap-2">
                                  {booking.status === "pending" && (
                                    <Button
                                      size="sm"
                                      onClick={() => confirmBooking(booking.id)}
                                      className="h-8 text-xs"
                                    >
                                      <CheckCircle className="w-3 h-3 mr-1" />
                                      Подтвердить
                                    </Button>
                                  )}
                                  {booking.status !== "cancelled" && (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => cancelBooking(booking.id)}
                                      className="h-8 text-xs"
                                    >
                                      <X className="w-3 h-3" />
                                    </Button>
                                  )}
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => deleteBooking(booking.id)}
                                    className="h-8"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>

                  {/* Десктопная версия - таблица */}
                  <div className="hidden md:block border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead>Клиент</TableHead>
                          <TableHead>Тренер</TableHead>
                          <TableHead>Тип</TableHead>
                          <TableHead>Дата</TableHead>
                          <TableHead>Время</TableHead>
                          <TableHead>Сумма</TableHead>
                          <TableHead>Статус</TableHead>
                          <TableHead className="text-right">Действия</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredBookings.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                              Записи не найдены
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredBookings.map((booking) => (
                            <TableRow key={booking.id} className="hover:bg-gray-50">
                              <TableCell className="font-medium">
                                <div>{booking.client}</div>
                                <div className="text-xs text-gray-500">{booking.clientPhone}</div>
                              </TableCell>
                              <TableCell>{booking.trainer}</TableCell>
                              <TableCell>
                                <Badge variant="outline">{booking.type}</Badge>
                              </TableCell>
                              <TableCell>{booking.date}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3 text-gray-400" />
                                  {booking.time}
                                </div>
                              </TableCell>
                              <TableCell className="font-semibold">{booking.amount} ₽</TableCell>
                              <TableCell>
                                {booking.status === "confirmed" && (
                                  <Badge className="bg-green-100 text-green-800">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Подтверждена
                                  </Badge>
                                )}
                                {booking.status === "pending" && (
                                  <Badge className="bg-yellow-100 text-yellow-800">
                                    <Clock className="w-3 h-3 mr-1" />
                                    Ожидает
                                  </Badge>
                                )}
                                {booking.status === "cancelled" && (
                                  <Badge className="bg-red-100 text-red-800">
                                    <XCircle className="w-3 h-3 mr-1" />
                                    Отменена
                                  </Badge>
                                )}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center justify-end gap-2">
                                  {booking.status === "pending" && (
                                    <Button
                                      size="sm"
                                      onClick={() => confirmBooking(booking.id)}
                                      className="h-8"
                                    >
                                      <CheckCircle className="w-3 h-3 mr-1" />
                                      Подтвердить
                                    </Button>
                                  )}
                                  {booking.status !== "cancelled" && (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => cancelBooking(booking.id)}
                                      className="h-8"
                                    >
                                      <X className="w-3 h-3 mr-1" />
                                      Отменить
                                    </Button>
                                  )}
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => deleteBooking(booking.id)}
                                    className="h-8"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>

              {/* Вкладка Клиенты */}
              <TabsContent value="clients">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="relative flex-1 w-full">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Поиск клиентов..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button onClick={() => setAddClientOpen(true)} className="w-full sm:w-auto">
                      <Plus className="w-4 h-4 mr-2" />
                      Добавить клиента
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {filteredClients.map((client) => (
                      <Card key={client.id} className="hover:shadow-md transition-all">
                        <CardContent className="pt-4 sm:pt-6">
                          {/* Мобильная версия */}
                          <div className="block sm:hidden space-y-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="w-14 h-14 border-2 border-blue-500 flex-shrink-0">
                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                                  {client.name.split(" ").map((n) => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-base truncate">{client.name}</h3>
                                <p className="text-xs text-gray-600 truncate">С {client.registered}</p>
                                <div className="mt-1">
                                  {client.status === "active" ? (
                                    <Badge className="bg-green-100 text-green-800 text-xs">Активен</Badge>
                                  ) : (
                                    <Badge className="bg-gray-100 text-gray-800 text-xs">Неактивен</Badge>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <span className="truncate">{client.email}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <span>{client.phone}</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                              <div className="bg-blue-50 p-3 rounded text-center">
                                <p className="text-xl font-bold text-blue-600">{client.sessions}</p>
                                <p className="text-xs text-gray-600 mt-1">Тренировок</p>
                              </div>
                              <div className="bg-green-50 p-3 rounded text-center">
                                <p className="text-xl font-bold text-green-600">{client.balance}</p>
                                <p className="text-xs text-gray-600 mt-1">Баланс</p>
                              </div>
                              <div className="bg-purple-50 p-3 rounded text-center">
                                <p className="text-sm font-bold text-purple-600">{client.lastVisit}</p>
                                <p className="text-xs text-gray-600 mt-1">Посещение</p>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2 pt-2">
                              <Button
                                size="sm"
                                onClick={() => addBalance(client.id, 5)}
                                className="w-full h-10"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Пополнить +5 занятий
                              </Button>
                              <div className="grid grid-cols-2 gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedClient(client);
                                    setEditClientOpen(true);
                                  }}
                                  className="h-10"
                                >
                                  <Edit className="w-4 h-4 mr-1" />
                                  <span className="hidden xs:inline">Изменить</span>
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => deleteClient(client.id)}
                                  className="h-10"
                                >
                                  <Trash2 className="w-4 h-4 mr-1" />
                                  <span className="hidden xs:inline">Удалить</span>
                                </Button>
                              </div>
                            </div>
                          </div>

                          {/* Десктопная версия */}
                          <div className="hidden sm:flex items-start gap-4">
                            <Avatar className="w-16 h-16 border-2 border-blue-500 flex-shrink-0">
                              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg">
                                {client.name.split(" ").map((n) => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <div className="min-w-0 flex-1 mr-2">
                                  <h3 className="font-bold text-lg truncate">{client.name}</h3>
                                  <p className="text-sm text-gray-600">С {client.registered}</p>
                                </div>
                                {client.status === "active" ? (
                                  <Badge className="bg-green-100 text-green-800 flex-shrink-0">Активен</Badge>
                                ) : (
                                  <Badge className="bg-gray-100 text-gray-800 flex-shrink-0">Неактивен</Badge>
                                )}
                              </div>

                              <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Mail className="w-4 h-4 flex-shrink-0" />
                                  <span className="truncate">{client.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Phone className="w-4 h-4 flex-shrink-0" />
                                  <span>{client.phone}</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-2 mb-4">
                                <div className="bg-blue-50 p-2 rounded text-center">
                                  <p className="text-xs text-gray-600">Тренировок</p>
                                  <p className="font-bold text-blue-600">{client.sessions}</p>
                                </div>
                                <div className="bg-green-50 p-2 rounded text-center">
                                  <p className="text-xs text-gray-600">Баланс</p>
                                  <p className="font-bold text-green-600">{client.balance}</p>
                                </div>
                                <div className="bg-purple-50 p-2 rounded text-center">
                                  <p className="text-xs text-gray-600">Визит</p>
                                  <p className="font-bold text-purple-600 text-xs">{client.lastVisit}</p>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => addBalance(client.id, 5)}
                                  className="flex-1"
                                >
                                  <Plus className="w-3 h-3 mr-1" />
                                  +5 занятий
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedClient(client);
                                    setEditClientOpen(true);
                                  }}
                                >
                                  <Edit className="w-3 h-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => deleteClient(client.id)}
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Вкладка Тренеры */}
              <TabsContent value="trainers">
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <Button onClick={() => setAddTrainerOpen(true)} className="w-full sm:w-auto">
                      <Plus className="w-4 h-4 mr-2" />
                      Добавить тренера
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {trainers.map((trainer) => (
                      <Card key={trainer.id} className="hover:shadow-lg transition-all">
                        <CardContent className="pt-4 sm:pt-6">
                          {/* Мобильная версия */}
                          <div className="block sm:hidden space-y-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="w-16 h-16 border-2 border-orange-500 flex-shrink-0">
                                <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white text-lg">
                                  {trainer.name.split(" ").map((n) => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-base truncate">{trainer.name}</h3>
                                <p className="text-xs text-gray-600 truncate">{trainer.specialization}</p>
                                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded mt-1 w-fit">
                                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                  <span className="font-bold text-sm">{trainer.rating}</span>
                                  <span className="text-xs text-gray-600">({trainer.reviews})</span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <span className="truncate">{trainer.email}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <span>{trainer.phone}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <BarChart3 className="w-4 h-4 flex-shrink-0" />
                                <span>Опыт: {trainer.experience}</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                              <div className="bg-blue-50 p-3 rounded text-center">
                                <p className="text-xl font-bold text-blue-600">{trainer.clients}</p>
                                <p className="text-xs text-gray-600 mt-1">Клиентов</p>
                              </div>
                              <div className="bg-green-50 p-3 rounded text-center">
                                <p className="text-xl font-bold text-green-600">{trainer.sessionsToday}</p>
                                <p className="text-xs text-gray-600 mt-1">Сегодня</p>
                              </div>
                              <div className="bg-purple-50 p-3 rounded text-center">
                                <p className="text-xl font-bold text-purple-600">{trainer.sessionsWeek}</p>
                                <p className="text-xs text-gray-600 mt-1">Неделя</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 pt-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setSelectedTrainer(trainer);
                                  setEditTrainerOpen(true);
                                }}
                                className="h-10"
                              >
                                <Edit className="w-4 h-4 mr-1" />
                                Изменить
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => deleteTrainer(trainer.id)}
                                className="h-10"
                              >
                                <Trash2 className="w-4 h-4 mr-1" />
                                Удалить
                              </Button>
                            </div>
                          </div>

                          {/* Десктопная версия */}
                          <div className="hidden sm:flex items-start gap-4">
                            <Avatar className="w-20 h-20 border-4 border-orange-500 flex-shrink-0">
                              <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white text-2xl">
                                {trainer.name.split(" ").map((n) => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-3">
                                <div className="min-w-0 flex-1 mr-2">
                                  <h3 className="font-bold text-xl truncate">{trainer.name}</h3>
                                  <p className="text-sm text-gray-600 truncate">{trainer.specialization}</p>
                                </div>
                                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded flex-shrink-0">
                                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                  <span className="font-bold">{trainer.rating}</span>
                                  <span className="text-sm text-gray-600">({trainer.reviews})</span>
                                </div>
                              </div>

                              <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Mail className="w-4 h-4 flex-shrink-0" />
                                  <span className="truncate">{trainer.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Phone className="w-4 h-4 flex-shrink-0" />
                                  <span>{trainer.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <BarChart3 className="w-4 h-4 flex-shrink-0" />
                                  <span>Опыт: {trainer.experience}</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-2 mb-4">
                                <div className="bg-blue-50 p-3 rounded text-center">
                                  <p className="text-xl font-bold text-blue-600">{trainer.clients}</p>
                                  <p className="text-xs text-gray-600">Клиентов</p>
                                </div>
                                <div className="bg-green-50 p-3 rounded text-center">
                                  <p className="text-xl font-bold text-green-600">{trainer.sessionsToday}</p>
                                  <p className="text-xs text-gray-600">Сегодня</p>
                                </div>
                                <div className="bg-purple-50 p-3 rounded text-center">
                                  <p className="text-xl font-bold text-purple-600">{trainer.sessionsWeek}</p>
                                  <p className="text-xs text-gray-600">За неделю</p>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedTrainer(trainer);
                                    setEditTrainerOpen(true);
                                  }}
                                  className="flex-1"
                                >
                                  <Edit className="w-3 h-3 mr-1" />
                                  Редактировать
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => deleteTrainer(trainer.id)}
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Диалог добавления записи */}
      <Dialog open={addBookingOpen} onOpenChange={setAddBookingOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Новая запись на тренировку</DialogTitle>
            <DialogDescription>Заполните информацию о новой записи</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Имя клиента *</Label>
              <Input
                value={newBookingData.client}
                onChange={(e) => setNewBookingData({ ...newBookingData, client: e.target.value })}
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <Label>Телефон клиента *</Label>
              <Input
                value={newBookingData.clientPhone}
                onChange={(e) => setNewBookingData({ ...newBookingData, clientPhone: e.target.value })}
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            <div>
              <Label>Тренер *</Label>
              <Select
                value={newBookingData.trainer}
                onValueChange={(value) => setNewBookingData({ ...newBookingData, trainer: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тренера" />
                </SelectTrigger>
                <SelectContent>
                  {trainers.map((t) => (
                    <SelectItem key={t.id} value={t.name}>
                      {t.name} - {t.specialization}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Тип тренировки *</Label>
              <Select
                value={newBookingData.type}
                onValueChange={(value) => setNewBookingData({ ...newBookingData, type: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Персональная">Персональная - 2500 ₽</SelectItem>
                  <SelectItem value="Групповая">Групповая - 800 ₽</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Дата *</Label>
                <Input
                  type="text"
                  value={newBookingData.date}
                  onChange={(e) => setNewBookingData({ ...newBookingData, date: e.target.value })}
                  placeholder="1 мар 2026"
                />
              </div>
              <div>
                <Label>Время *</Label>
                <Input
                  type="text"
                  value={newBookingData.time}
                  onChange={(e) => setNewBookingData({ ...newBookingData, time: e.target.value })}
                  placeholder="14:00"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddBookingOpen(false)}>
              Отмена
            </Button>
            <Button onClick={addBooking}>
              <Save className="w-4 h-4 mr-2" />
              Создать запись
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Диалог добавления клиента */}
      <Dialog open={addClientOpen} onOpenChange={setAddClientOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Новый клиент</DialogTitle>
            <DialogDescription>Добавьте нового клиента в базу</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Имя *</Label>
              <Input
                value={newClientData.name}
                onChange={(e) => setNewClientData({ ...newClientData, name: e.target.value })}
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <Label>Email *</Label>
              <Input
                type="email"
                value={newClientData.email}
                onChange={(e) => setNewClientData({ ...newClientData, email: e.target.value })}
                placeholder="ivanov@mail.com"
              />
            </div>
            <div>
              <Label>Телефон *</Label>
              <Input
                value={newClientData.phone}
                onChange={(e) => setNewClientData({ ...newClientData, phone: e.target.value })}
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            <div>
              <Label>Начальный баланс занятий</Label>
              <Input
                type="number"
                value={newClientData.balance}
                onChange={(e) => setNewClientData({ ...newClientData, balance: parseInt(e.target.value) || 0 })}
                placeholder="0"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddClientOpen(false)}>
              Отмена
            </Button>
            <Button onClick={addClient}>
              <Save className="w-4 h-4 mr-2" />
              Добавить клиента
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Диалог добавления тренера */}
      <Dialog open={addTrainerOpen} onOpenChange={setAddTrainerOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Новый тренер</DialogTitle>
            <DialogDescription>Добавьте нового тренера в команду</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Имя *</Label>
              <Input
                value={newTrainerData.name}
                onChange={(e) => setNewTrainerData({ ...newTrainerData, name: e.target.value })}
                placeholder="Алексей Петров"
              />
            </div>
            <div>
              <Label>Специализация *</Label>
              <Input
                value={newTrainerData.specialization}
                onChange={(e) => setNewTrainerData({ ...newTrainerData, specialization: e.target.value })}
                placeholder="Силовые тренировки"
              />
            </div>
            <div>
              <Label>Email *</Label>
              <Input
                type="email"
                value={newTrainerData.email}
                onChange={(e) => setNewTrainerData({ ...newTrainerData, email: e.target.value })}
                placeholder="petrov@fitnessclub.ru"
              />
            </div>
            <div>
              <Label>Телефон *</Label>
              <Input
                value={newTrainerData.phone}
                onChange={(e) => setNewTrainerData({ ...newTrainerData, phone: e.target.value })}
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            <div>
              <Label>Опыт работы *</Label>
              <Input
                value={newTrainerData.experience}
                onChange={(e) => setNewTrainerData({ ...newTrainerData, experience: e.target.value })}
                placeholder="5 лет"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddTrainerOpen(false)}>
              Отмена
            </Button>
            <Button onClick={addTrainer}>
              <Save className="w-4 h-4 mr-2" />
              Добавить тренера
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}